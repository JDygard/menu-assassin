import React, { useState } from 'react';
import MenuBox from './MenuBox';

const MenuGenerator = () => {
  const [menuCount, setMenuCount] = useState(1);

  const handleButtonClick = () => {
    setMenuCount(menuCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Create Menu Box</button>
      {Array.from({ length: menuCount }).map((_, index) => (
        <MenuBox key={index} />
      ))}
    </div>
  );
};

export default MenuGenerator;
