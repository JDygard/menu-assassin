import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Ninja from './Ninja';
import { ITEM_TYPE } from '../modules/itemTypes';
import { useDrop } from 'react-dnd';

const StyledSlot = styled(Box)(({ theme }) => ({
  height: '100px',
  width: '100px',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid black',
  margin: theme.spacing(1),
}));

const Slot = ({ slot, addNinjaToSlot, removeNinjaFromSlot }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ITEM_TYPE.NINJA,
    drop: (item) => {
      addNinjaToSlot(item.slotIndex, slot?.index, item.ninja);
    },
    canDrop: (item) => {
      return !slot?.ninja || item.ninja.id !== slot?.ninja.id;
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });

  return (
    <StyledSlot ref={drop} isactive={canDrop ? isOver : undefined}>
      {slot?.ninja && (
        <div style={{ opacity: 1 }}>
          <Ninja ninja={slot.ninja} removeNinjaFromSlot={() => removeNinjaFromSlot(slot.index)} />
        </div>
      )}
    </StyledSlot>
  );
};

export default Slot;
