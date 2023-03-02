import React from 'react';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';
import { getNinjas } from '../modules/ninjas';
import NinjaMenuWindow from './NinjaMenuWindow';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Paper } from '@mui/material';

const NinjaManagerWrapper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'lightgray',
  });

function NinjaManager() {
    const [ninjas, setNinjas] = React.useState(getNinjas());

    const handleDrop = (id, targetWindow) => {
        const newNinjas = ninjas.map(ninja => {
            if (ninja.id === id) {
                return {
                    ...ninja,
                    window: targetWindow,
                };
            } else if (ninja.window === targetWindow) {
                return {
                    ...ninja,
                    window: '',
                };
            } else {
                return ninja;
            }
        });

        setNinjas(newNinjas);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <NinjaManagerWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <NinjaMenuWindow
                            ninjas={ninjas.filter(ninja => ninja.window === 'menu1')}
                            onDrop={id => handleDrop(id, 'menu1')}
                            title="Ninja Menu 1"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <NinjaMenuWindow
                            ninjas={ninjas.filter(ninja => ninja.window === 'menu2')}
                            onDrop={id => handleDrop(id, 'menu2')}
                            title="Ninja Menu 2"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <NinjaMenuWindow
                            ninjas={ninjas.filter(ninja => !ninja.window)}
                            onDrop={id => handleDrop(id, 'menu1')}
                            title="Unassigned Ninjas"
                        />
                    </Grid>
                </Grid>
            </NinjaManagerWrapper>
        </DndProvider>

    );
}

export default NinjaManager;