const sqlite3 = require("sqlite3").verbose();

let db;

try {
  // Открываем соединение с базой данных
  db = new sqlite3.Database("./db.sqlite", (err) => {
    if (err) {
      console.error(err.message);
    }
  });
} catch (error) {
  console.error("Ошибка при подключении к базе данных: " + error.message);
}

module.exports = db;
