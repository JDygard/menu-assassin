import React from 'react';
import styled from 'styled-components';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuildingSubMenu from './BuildingSubMenu';

const StyledAccordion = styled(Accordion)`
  width: 300px;
  margin: 10px;
  border-radius: 5px;
`;

const BuildingMenu = () => {
  const buildings = [
    { id: 1, name: 'Dojo', description: 'Train your ninjas here.' },
    { id: 2, name: 'Blacksmith', description: 'Craft weapons and armor.' },
    { id: 3, name: 'Stables', description: 'Acquire horses for faster travel.' },
  ];
  
  return (
    <>
      {buildings.map(building => (
        <StyledAccordion key={building.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{building.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{building.description}</Typography>
          </AccordionDetails>
          <BuildingSubMenu buildingId={building.id} />
        </StyledAccordion>
      ))}
    </>
  );
};

export default BuildingMenu;