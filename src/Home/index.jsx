import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProcedureIdeas } from './ProcedureIdeas';

const Drawer = createDrawerNavigator();
const HomeNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name='ProcedureIdeas' component={ProcedureIdeas} options={{
            headerShown: false,
        }}/>
    </Drawer.Navigator>
)

export default HomeNavigator;