const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // Это разрешит CORS для всех доменов

const menuData = require("./data");
// Модель данных древовидного меню

// Метод для загрузки данных меню
app.get("/api/menu", (req, res) => {
  res.json(menuData);
});

app.listen(3000, () => {
  console.log("Backend запущен на порту 3000");
});
