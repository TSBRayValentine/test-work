import React, { useState } from "react";
import axios from "axios";

import "./index.css";
export const MenuItem = ({ item, handleItemClick }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  // ------------------------------------------
  // функция для получения данных с сервера по нажатие кнопки
  const onItemClick = async (item) => {
    setLoading(true);
    setData({});

    try {
      const res = await axios.get(
        `http://localhost:3000/api/treeMenu/checkChildren`,
        { params: { id: item.id } }
      );

      if (res.data.length === 0) {
        window.location.href = `http://localhost:8083/${item.url}`;
      }

      setData(res.data);
      handleItemClick(item);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------
  // HTML

  return (
    <li className="li">
      <span
        onClick={async () => {
          await onItemClick(item);
        }}
        className="menu-item"
      >
        {item.name}
      </span>

      {loading ? (
        <p>Загрузка данных...</p>
      ) : (
        data.length > 0 && (
          <ul>
            {data.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                handleItemClick={handleItemClick}
              />
            ))}
          </ul>
        )
      )}
    </li>
  );
};
