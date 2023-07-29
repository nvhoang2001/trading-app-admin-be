import 'reflect-metadata'
import ENVS from 'constants/environment'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { RegisterRoutes } from 'routes'
import swaggerUi from 'swagger-ui-express'
import { ValidateError } from 'tsoa'
import { EntityNotFoundError, QueryFailedError } from 'typeorm'

const app = express()

// middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

RegisterRoutes(app)

app.use('/docs', swaggerUi.serve, async (_req: Request, res: Response) => {
  return res.send(swaggerUi.generateHTML(await import('../src/swagger.json')))
})

// TODO:-D check here - move to errorHandle file
app.use(function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void {
  // TODO: use switch case
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields)
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    })
  }

  if (err instanceof EntityNotFoundError) {
    return res.status(404).json({
      message: 'Data not found!',
      details: err?.message,
    })
  }

  if (err instanceof QueryFailedError) {
    return res.status(422).json({
      message: err?.message,
    })
  }

  if (err instanceof Error) {
    if (ENVS.NODE_ENV === 'development') {
      console.error(err.message)
    }

    return res.status(500).json({
      message: 'Internal Server Error',
      details: err.message,
      name: err.name,
    })
  }

  next()
})

app.get('*', (req, res) => {
  return res.status(404).json({
    message: 'Not found!',
  })
})

export default app
