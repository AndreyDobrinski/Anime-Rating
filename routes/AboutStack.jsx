import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import AppAbout from '../pages/AppAbout';

import AppHeader from '../components/AppHeader'


const Stack = createStackNavigator();



export const AppNavigatorAbout = ({ navigation }) => (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#eee', }, headerTintColor: '#444', headerTitleStyle: { fontWeight: 'bold', }, }}  >
        {/* <Stack.Screen name="AppAbout" component={AppAbout} options={{ title: "About", }} /> */}
        <Stack.Screen name="AppAbout" component={AppAbout} options={{ headerTitle: () => <AppHeader navigation={navigation} title='About' />, }} />

    </Stack.Navigator>
);

