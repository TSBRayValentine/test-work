module.exports.action = (req, res) => {
  // --------------------------------------------------
  // Модель данных древовидного меню
  const data = require("./data");

  // --------------------------------------------------
  // Функция поиска данных по URL
  function findElementByUrl(data, url) {
    if (data.url === url) {
      return data;
    }
    for (let i = 0; i < data.children.length; i++) {
      const result = findElementByUrl(data.children[i], url);
      if (result) {
        return result;
      }
    }
    return null;
  }

  // --------------------------------------------------
  // Функция удаления ключа из массива
  function removeKeyFromArray(arr, key) {
    return arr.map((item) => {
      const { [key]: deletedKey, ...rest } = item;
      return rest;
    });
  }

  // --------------------------------------------------
  // Тестирование функции поиска данных по URL
  let result = findElementByUrl(data, req.query.url);
  result = result.children;
  result = removeKeyFromArray(result, "children");

  // --------------------------------------------------
  // Отправка данных в ответ
  res.json(result);
};
