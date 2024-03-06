import React, { useState, useEffect } from "react";
import axios from "axios";

const MenuItem = ({ item }) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li>
      <span
        onClick={async () => {
          await onItemClick(item);
        }}
        href={item.url}
      >
        {item.name}
      </span>

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
  }, []);

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
