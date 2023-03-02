import React from 'react';
import { styled } from '@mui/system';
import { Avatar } from '@mui/material';
import { useDrag } from 'react-dnd';

const NinjaIcon = React.forwardRef((props, ref) => {
    const { ninja } = props;
    const [{ isDragging }, dragRef] = useDrag({
        type: 'NINJA_ICON',
        id: ninja.id,
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    const opacity = isDragging ? 0.5 : 1;
    const iconStyle = {
      opacity,
      fontSize: '2rem',
      margin: '0.5rem',
      cursor: 'move',
    };
  
    return (
      <div ref={dragRef} style={iconStyle}>
        <span role="img" aria-label={ninja.name}>
          {ninja.icon}
        </span>
      </div>
    );
  });
  
  export default NinjaIcon;