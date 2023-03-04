import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Slot from './Slot';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: theme.spacing(1),
}));

const SlotsBlock = ({ slots }) => {
  const dummyData = [
    { index: 1, ninja: { name: 'Naruto', image: 'naruto.png' } },
    { index: 2, ninja: { name: 'Sasuke', image: 'sasuke.png' } },
    { index: 3, ninja: { name: 'Sakura', image: 'sakura.png' } },
  ];
  const slotData = slots || dummyData;
  
  return (
    <StyledBox>
      {slotData.map((slot, index) => (
        <Slot key={index} slot={slot} />
      ))}
    </StyledBox>
  );
};

export default SlotsBlock;