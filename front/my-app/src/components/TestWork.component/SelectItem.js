import React from "react";
import "./index.css";
export const SelectItem = ({ item }) => {
  return (
    <div className="main-item">
      <div>
        <h2>Выбрано:</h2>
        <p>
          {" "}
          <span className="has-text-weight-bold">Название: </span> {item.name}
        </p>
        <p>
          {" "}
          <span className="has-text-weight-bold">URL:</span> {item.url}
        </p>
        {/* Добавьте другие свойства элемента, если необходимо */}
      </div>
    </div>
  );
};
