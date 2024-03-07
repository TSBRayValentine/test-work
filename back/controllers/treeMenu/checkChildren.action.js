const db = require("../../database/database.js");

module.exports.action = (req, res) => {
  // ---------------------------------------------------
  // Выполняем SQL-запрос для получения данных из базы данных

  var sql = "SELECT * FROM menu WHERE parent = ?";
  var params = [req.query.id];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
};
