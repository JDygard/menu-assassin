import React from 'react';
import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NinjaMenuItem from './NinjaMenuItem';

const StyledAccordion = styled(Accordion)`
  width: 300px;
  margin: 10px;
  border-radius: 5px;
`;

const BuildingSubMenu = ({ buildingId }) => {
  const ninjas = [
    {
      id: 1,
      name: 'Hanzo Hattori',
      calm: 8,
      agility: 7,
      preparedness: 9,
      stealth: 10,
    },
    {
      id: 2,
      name: 'Kotaro Fuma',
      calm: 9,
      agility: 10,
      preparedness: 8,
      stealth: 7,
    },
    {
      id: 3,
      name: 'Sasuke Sarutobi',
      calm: 7,
      agility: 8,
      preparedness: 10,
      stealth: 9,
    },
  ];

  return (
    <AccordionDetails>
      {ninjas.map(ninja => (
        <NinjaMenuItem key={ninja.id} ninja={ninja} />
      ))}
    </AccordionDetails>
  );
};

export default BuildingSubMenu;
