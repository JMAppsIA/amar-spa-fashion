import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProcedureIdeas } from './ProcedureIdeas';
import { DRAWER_WIDTH } from './Drawer/CustomDrawer';
import { CustomDrawer } from './Drawer';

const Drawer = createDrawerNavigator();
const HomeNavigator = () => (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/> } drawerStyle={{
        width: DRAWER_WIDTH
    }}>
        <Drawer.Screen name='ProcedureIdeas' component={ProcedureIdeas} options={{
            headerShown: false,
        }}/>
    </Drawer.Navigator>
)

export default HomeNavigator;