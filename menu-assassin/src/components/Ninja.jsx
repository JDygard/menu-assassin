import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useDrag } from 'react-dnd';
import { ITEM_TYPE } from '../modules/itemTypes';

const StyledNinja = styled('div')(({ theme }) => ({
  width: '100px',
  height: '100px',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
  cursor: 'move',
}));

const HealthBar = styled('div')(({ theme, health }) => ({
  height: '5px',
  width: `${health}%`,
  backgroundColor: theme.palette.success.main,
  transition: 'width 0.3s ease',
}));

const StaminaBar = styled('div')(({ theme, stamina }) => ({
  height: '5px',
  width: `${stamina}%`,
  backgroundColor: theme.palette.warning.main,
  transition: 'width 0.3s ease',
}));

const LoyaltyBar = styled('div')(({ theme, loyalty }) => ({
  height: '5px',
  width: `${loyalty}%`,
  backgroundColor: theme.palette.error.main,
  transition: 'width 0.3s ease',
}));

const Ninja = ({ ninja, removeNinjaFromSlot }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { ninja },
    type: ITEM_TYPE.NINJA,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <StyledNinja ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h3>{ninja.name}</h3>
      <div>
        <span>Health:</span>
        <HealthBar health={ninja.health} />
      </div>
      <div>
        <span>Stamina:</span>
        <StaminaBar stamina={ninja.stamina} />
      </div>
      <div>
        <span>Loyalty:</span>
        <LoyaltyBar loyalty={ninja.loyalty} />
      </div>
    </StyledNinja>
  );
};

Ninja.propTypes = {
  ninja: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    stamina: PropTypes.number.isRequired,
    loyalty: PropTypes.number.isRequired,
  }).isRequired,
  removeNinjaFromSlot: PropTypes.func.isRequired,
};

export default Ninja;
