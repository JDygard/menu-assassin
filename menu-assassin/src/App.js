import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Main />
      </DndProvider>
  );
}

export default App;