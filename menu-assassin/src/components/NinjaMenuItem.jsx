import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/constants';
import NinjaMenuWindow from './NinjaMenuWindow';

const StyledNinja = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 5px;
  border: 2px solid ${props => props.theme.palette.secondary.main};
  border-radius: 5px;
  cursor: move;
`;

const NinjaMenuItem = ({ ninja }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.NINJA, id: ninja.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <StyledNinja ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} onClick={handleClick}>
        <Typography variant="body1">{ninja.name}</Typography>
        <Typography variant="body2">
          {`Calm: ${ninja.calm} Agility: ${ninja.agility} Preparedness: ${ninja.preparedness} Stealth: ${ninja.stealth}`}
        </Typography>
      </StyledNinja>
      {isOpen && <NinjaMenuWindow ninja={ninja} setIsOpen={setIsOpen} />}
    </>
  );
};

export default NinjaMenuItem;
