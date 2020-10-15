class ErrorHandler extends Error {
  constructor(message, statuses) {
    supre(message);
    this.statuses = statuses;
    Error.captureStackTrace(this, this.constructor)
  }
}
module.exports = ErrorHandler;
/*
class ErrorResponse extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }

  module.exports = ErrorResponse;
*/

//現在未使用