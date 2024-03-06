import React, { useState } from "react";
import { Menu } from "./Menu";
import { SelectItem } from "./SelectItem";

export const Main = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div class="test-work-main">
      <Menu handleItemClick={handleItemClick} />
      {selectedItem ? (
        <SelectItem item={selectedItem} />
      ) : (
        <div>Выберите элемент</div>
      )}
    </div>
  );
};
