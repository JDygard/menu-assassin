import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  position: 'relative',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: theme.spacing(2),
  transform: 'translateY(-50%)',
}));

const InformationBlock = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledBox>
      <StyledIconButton onClick={handleCollapseClick}>
        {isCollapsed ? <ExpandMore /> : <ExpandLess />}
      </StyledIconButton>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Information Block
      </Typography>
      {!isCollapsed && (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      )}
    </StyledBox>
  );
};

export default InformationBlock;
