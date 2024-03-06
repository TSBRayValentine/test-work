const express = require("express");

const router = express.Router();

const getData = require("./getData.action");
const checkChildren = require("./checkChildren.action");

// Получение всех данных
router.get("/getData", getData.action);
router.get("/checkChildren", checkChildren.action);

module.exports = router;
