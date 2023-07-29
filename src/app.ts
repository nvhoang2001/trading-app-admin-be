import 'reflect-metadata'
import cors from 'cors'
import express, { Request, Response } from 'express'
import helmet from 'helmet'
import { errorHandler } from 'middlewares/error-handler.middleware'
import morgan from 'morgan'
import { RegisterRoutes } from 'routes'
import swaggerUi from 'swagger-ui-express'

const app = express()

// middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

RegisterRoutes(app)
app.use(errorHandler)

app.use('/docs', swaggerUi.serve, async (_req: Request, res: Response) => {
  return res.send(swaggerUi.generateHTML(await import('../src/swagger.json')))
})

app.get('*', (req, res) => {
  return res.status(404).json({
    message: 'Not found!',
  })
})

export default app
