import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AppNavigatorHome } from './HomeStack';
import { AppNavigatorAbout } from './AboutStack';


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="AppHome">
                <Drawer.Screen name="Home" component={AppNavigatorHome} />
                <Drawer.Screen name="About" component={AppNavigatorAbout} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}



