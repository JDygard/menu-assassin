import React from 'react';
import { styled } from '@mui/system';
import { Paper, Typography } from '@mui/material';

const useStyles = styled(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '300px',
    height: '400px',
    zIndex: 999,
  },
  titleBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    overflow: 'auto',
  },
}));

function NinjaInventory({ ninjas, title }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.titleBar}>
        <Typography variant="h6">{title}</Typography>
      </div>
      <div className={classes.content}>
        {ninjas.map(ninja => (
          <div key={ninja.id}>{ninja.name}</div>
        ))}
      </div>
    </Paper>
  );
}

export default NinjaInventory;