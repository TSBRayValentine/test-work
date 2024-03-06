// --------------------------------------------------
// Модель данных древовидного меню
const menuData = require("./data");

module.exports.action = (req, res) => {
  const data = {
    id: menuData.id,
    name: menuData.name,
    url: menuData.url,
  };
  res.json(data);
};
