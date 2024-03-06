import React, { useState, useEffect } from "react";
import axios from "axios";

const MenuItem = ({ item }) => {
  const [data, setData] = useState({});

  //   ------------------------------------------
  // функция для получения данных с сервера

  const onItemClick = async (item) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/treeMenu/checkChildren`,
        { params: { url: item.url } }
      );

      if (res.data.length < 0) {
        console.log(res.data);
      }

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li
      onClick={async () => {
        await onItemClick(item);
      }}
    >
      <span href={item.url}>{item.name}</span>

      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Menu = () => {
  //   ------------------------------------------
  // API запрос для получения данных с сервера

  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/treeMenu/getData`);

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
        <MenuItem key={data.id} item={data} />
      </ul>
    </div>
  );
};

export default Menu;
