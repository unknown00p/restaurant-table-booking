class ApiError extends Error {
  statusCode: number;
  errors: any[];
  constructor(
    statusCode: number,
    message: string = "something went wrong",
    errors: [] = [],
    stack = ""
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export {
    ApiError
}