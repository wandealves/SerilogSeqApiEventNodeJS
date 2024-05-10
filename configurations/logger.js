const winston = require("winston");
const { combine, timestamp, json, printf } = winston.format;
const { SeqTransport } = require("@datalust/winston-seq");

const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const setup = () => {
  const logger = winston.createLogger({
    levels: logLevels,
    level: process.env.LOG_LEVEL || "info",
    format: combine(
      timestamp({
        format: "YYYY-MM-DD hh:mm:ss.SSS A"
      }),
      json()
    ),
    transports: [
      new SeqTransport({
        serverUrl: "http://seq:5341",
        onError: e => {
          console.error(e);
        }
      }),
      new winston.transports.Console()
    ]
  });
  return logger;
};

module.exports = { setup };
