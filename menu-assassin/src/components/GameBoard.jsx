import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import MenuBox from './MenuBox';
import { DndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

const StyledBox = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100vw',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const GameBoard = () => {
  return (
    <StyledBox>
      <MenuBox />
    </StyledBox>
  );
};

export default GameBoard;
