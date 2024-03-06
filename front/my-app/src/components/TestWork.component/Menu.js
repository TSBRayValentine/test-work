import React, { useState, useEffect } from "react";
import axios from "axios";
import { MenuItem } from "./MenuItem";

export const Menu = ({ handleItemClick }) => {
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
        <MenuItem key={data.id} item={data} handleItemClick={handleItemClick} />
      </ul>
    </div>
  );
};
