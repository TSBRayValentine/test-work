import React from "react";

export const SelectItem = ({ item }) => {
  return (
    <div>
      <h2>Выбрано:</h2>
      <p>Название: {item.name}</p>
      <p>URL: {item.url}</p>
      {/* Добавьте другие свойства элемента, если необходимо */}
    </div>
  );
};
