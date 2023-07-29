import ENV from 'constants/environment'
import { NextFunction, Request, Response } from 'express'
import { ValidateError } from 'tsoa'
import { EntityNotFoundError, QueryFailedError } from 'typeorm'
import { HttpError } from 'utils/show-error'

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      message: err.message,
    })
  }

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
    if (ENV.NODE_ENV === 'development') {
      console.error(err.message)
    }

    return res.status(500).json({
      message: 'Internal Server Error',
      details: err.message,
      name: err.name,
    })
  }

  next()
}
