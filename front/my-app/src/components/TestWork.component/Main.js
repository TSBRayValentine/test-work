import React, { useState } from "react";
import { Menu } from "./Menu";
import { SelectItem } from "./SelectItem";

export const Main = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div className="test-work-main content">
        <Menu handleItemClick={handleItemClick} />

        {selectedItem ? (
          <SelectItem item={selectedItem} />
        ) : (
          <div className="main-item">Выберите элемент</div>
        )}
      </div>
    </div>
  );
};
