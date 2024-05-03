const logger = require("./configurations/logger").setup();
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const eventRoutes = require("./routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", eventRoutes);
app.listen(PORT, () => {
  logger.info("Servidor rodando na porta {port}", { port: PORT });
  console.log(`Servidor rodando na porta ${PORT}`);
});
