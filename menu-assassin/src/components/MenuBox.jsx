import React, { useState } from 'react';

const MenuBox = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setInitialPosition({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) {
      return;
    }

    setPosition({
      x: event.clientX - initialPosition.x,
      y: event.clientY - initialPosition.y,
    });
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '300px',
        height: '200px',
        backgroundColor: '#fff',
        border: '1px solid #000',
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div style={{ padding: '10px', cursor: 'move' }}>Menu Box Title</div>
    </div>
  );
};

export default MenuBox;
