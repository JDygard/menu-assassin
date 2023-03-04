import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import GameBoard from './components/GameBoard';
import theme from './modules/theme';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import ErrorBoundary from './utils/ErrorBoundary';
import { Box } from '@mui/material';

const App = () => {
  return (
    <ErrorBoundary>
      <DndProvider backend={HTML5Backend}>
        <ThemeProvider theme={theme}>
          <GameBoard />
        </ThemeProvider>
      </DndProvider>
    </ErrorBoundary>
  );
};

export default App;
