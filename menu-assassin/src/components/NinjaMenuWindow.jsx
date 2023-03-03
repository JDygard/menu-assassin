import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';

const StyledWindow = styled.div(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  padding: '20px',
  backgroundColor: theme.palette.background.paper,
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: '5px',
  zIndex: '100',
}));

const NinjaIcon = styled.img(({ theme }) => ({
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: '50%',
  margin: '10px',
}));

const NinjaMenuWindow = ({ ninja, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <StyledWindow>
      <Typography variant="h6">{ninja.name}</Typography>
      <NinjaIcon src={`images/${ninja.image}`} alt={ninja.name} />
      <Typography variant="body1">
        {`Calm: ${ninja.calm} Agility: ${ninja.agility} Preparedness: ${ninja.preparedness} Stealth: ${ninja.stealth}`}
      </Typography>
      <Typography variant="body1">{`Health: ${ninja.health} Stamina: ${ninja.stamina} Loyalty: ${ninja.loyalty}`}</Typography>
      <Typography variant="body1">{`Abilities: ${ninja.abilities.join(', ')}`}</Typography>
      <Typography variant="body1">{`Inventory: ${ninja.inventory.join(', ')}`}</Typography>
      <Button variant="contained" onClick={handleClose}>
        Close
      </Button>
    </StyledWindow>
  );
};

export default NinjaMenuWindow;