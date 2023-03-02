import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const useStyles = styled(theme => ({
  root: {
    marginBottom: "10px",
  },
}));

function NinjaAction({ text, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onClick}>
        {text}
      </Button>
    </div>
  );
}

export default NinjaAction;