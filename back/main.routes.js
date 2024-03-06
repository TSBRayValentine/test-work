// main.routes.js
const express = require("express");
const router = express.Router();

// Подключение файлов с маршрутами
const treeMenu = require("./controllers/treeMenu/treeMenu.routing");

// Использование файлов как маршрутов
router.use("/treeMenu", treeMenu);

module.exports = router;
