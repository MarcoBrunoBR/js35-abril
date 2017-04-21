let logger = null

class Logger {
  constructor() {
    if (!logger) {
       logger = this
    }

    return logger
  }
  _formatTag(tag) {
    return `[${tag}]`
  }
  info(tag, msg) {
    console.log(this._formatTag(tag), msg)
  }
  error(tag, msg) {
    console.error(this._formatTag(tag), msg)
  }
}


module.exports = Logger
