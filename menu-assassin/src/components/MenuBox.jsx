import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Typography } from '@mui/material';
import InformationBlock from './InformationBlock';
import SlotsBlock from './SlotsBlock';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  transform: `translate(${theme.spacing(2)}, ${theme.spacing(2)})`,
  width: '300px',
  height: '200px',
  '& .title-bar': {
    cursor: 'move',
  },
}));

const TitleBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
}));

const MenuBox = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    const targetClassList = event.target.classList;
    if (!targetClassList.contains('title-bar')) {
      return;
    }

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
    <StyledBox
      sx={{ top: position.y, left: position.x }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <StyledPaper elevation={3}>
        <TitleBar className="title-bar">
          <Typography variant="h6" sx={{  pointerEvents: 'none'}}>Menu Box Title</Typography>
        </TitleBar>
        <InformationBlock />
        <SlotsBlock />
      </StyledPaper>
    </StyledBox>
  );
};

export default MenuBox;
