const winston = require("winston");
const { combine, timestamp, json, printf } = winston.format;
const { SeqTransport } = require("@datalust/winston-seq");

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5
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
      //customFormat
    ),
    transports: [
      new SeqTransport({
        serverUrl: process.env.SEQ_URL || "http://localhost:5341",
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
