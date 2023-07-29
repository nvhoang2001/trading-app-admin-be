export class HttpError extends Error {
  public statusCode: number
  constructor(message: string, statusCode: number = 422) {
    super(message)

    this.statusCode = statusCode
  }
}

export const showError = (message: string, statusCode?: number) => {
  throw new HttpError(message, statusCode)
}
