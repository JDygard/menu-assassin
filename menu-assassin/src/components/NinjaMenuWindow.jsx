import React from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import { Close, Maximize, Minimize } from '@mui/icons-material';
import { useDrag, useDrop } from 'react-dnd';
import NinjaIcon from './NinjaIcon';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  height: 400px;
  z-index: 999;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  flex: 1;
  overflow: auto;
`;

function NinjaMenuWindow({ ninjas, onDrop, onClose, onMinimize, onMaximize, isMaximized, title }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'NINJA_ICON',
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: 'NINJA_ICON',
    drop: item => onDrop(item.id),
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });


  const opacity = isDragging ? 0.5 : 1;
  const backgroundColor = canDrop && isOver ? 'lightgray' : 'white';
  const display = isMaximized ? 'none' : 'flex'; // Change second to 'none' to hide window when not maximized
  return (
    <StyledPaper style={{ opacity, backgroundColor, display }} ref={dropRef}>
      <TitleBar>
        <Typography variant="h6">{title}</Typography>
        <div>
          <IconButton size="small" onClick={onMinimize}>
            <Minimize />
          </IconButton>
          <IconButton size="small" onClick={onMaximize}>
            {isMaximized ? <Close /> : <Maximize />}
          </IconButton>
          <IconButton size="small" onClick={onClose}>
            <Close />
          </IconButton>
        </div>
      </TitleBar>
      <Content>
        {ninjas.map(ninja => (
            <NinjaIcon key={ninja.id} ninja={ninja} ref={dragRef} />
        ))}
      </Content>
    </StyledPaper>
  );
}

export default NinjaMenuWindow;