import React, { useState } from "react";
import axios from "axios";

import "./index.css";
export const MenuItem = ({ item, handleItemClick }) => {
  const [data, setData] = useState({});

  //   ------------------------------------------
  // функция для получения данных с сервера
  const onItemClick = async (item) => {
    setData({});

    try {
      const res = await axios.get(
        `http://localhost:3000/api/treeMenu/checkChildren`,
        { params: { url: item.url } }
      );

      if (res.data.length === 0) {
        console.log(res.data);
        window.location.href = `http://localhost:8083/${item.url}`;
      }

      setData(res.data);
      handleItemClick(item);
    } catch (error) {
      console.log(error);
    }
  };

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

      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              handleItemClick={handleItemClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
