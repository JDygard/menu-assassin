import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CssBaseline } from '@mui/material';
import NinjaManager from './components/NinjaManager';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <NinjaManager />
      </DndProvider>
    </React.Fragment>
  );
}

export default App;