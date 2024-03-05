import React, { useState, useEffect } from "react";
import axios from "axios";

const MenuItem = ({ item }) => (
  <li>
    <a href={item.url}>{item.name}</a>

    {item.children?.length > 0 && (
      <ul>
        {item.children.map((child) => (
          <MenuItem key={child.id} item={child} />
        ))}
      </ul>
    )}
  </li>
);

const Menu = ({ onItemClick }) => {
  //   ------------------------------------------
  // API запрос для получения данных с сервера

  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/menu/`);

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []); // <-- passing an empty array as a second argument triggers the effect only once

  //   ------------------------------------------
  // API запрос для получения данных с сервера

  return (
    <div>
      <ul>
        <MenuItem item={data} />
      </ul>
    </div>
  );
};

export default Menu;
