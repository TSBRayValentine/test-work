const express = require("express");
const router = express.Router();

const cors = require("cors");

const app = express();

app.use(cors());

// --------------------------------------------------
// Подключение главного файла с маршрутами

const routers = require("./main.routes");

app.use("/api", routers);

// --------------------------------------------------
// Запуск приложения

app.listen(3000, () => {
  console.log("Backend запущен на порту 3000");
});
