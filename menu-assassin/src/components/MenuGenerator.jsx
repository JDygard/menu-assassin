import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Stack } from '@mui/material';
import MenuBox from './MenuBox';

const StyledStack = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const MenuGenerator = () => {
  const [menuCount, setMenuCount] = useState(1);

  const handleButtonClick = () => {
    setMenuCount(menuCount + 1);
  };

  return (
    <StyledStack>
      <Button onClick={handleButtonClick} variant="contained">
        Create Menu Box
      </Button>
      {Array.from({ length: menuCount }).map((_, index) => (
        <MenuBox key={index} />
      ))}
    </StyledStack>
  );
};

export default MenuGenerator;
