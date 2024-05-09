const logger = require("./configurations/logger").setup();
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const eventRoutes = require("./routes");
console.log("process.env.SEQ_URL", process.env.SEQ_URL);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", eventRoutes);
app.get("/health-check", (req, res) => {
  res.send("OK");
});
app.listen(PORT, () => {
  logger.info("Servidor rodando na porta {port}", { port: PORT });
  console.log(`Servidor rodando na porta ${PORT}`);
});
