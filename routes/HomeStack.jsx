import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppHome from '../pages/AppHome';
import ReviewDetails from '../pages/ReviewDetails';

import AppHeader from '../components/AppHeader'


const Stack = createStackNavigator();
// const { Navigator, Screen } = createStackNavigator();



export const AppNavigatorHome = ({ navigation }) => (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#eee', height: 90   }, headerTintColor: '#444', headerTitleStyle: { fontWeight: 'bold', }, }}  >
        {/* <Stack.Screen name="AppHome" component={AppHome} options={{ title: "Home", }} /> */}
        <Stack.Screen name="AppHome" component={AppHome} options={{ headerTitle: () => <AppHeader navigation={navigation} title='Anime Rating' />, }} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: "Review Details", }} />
    </Stack.Navigator>
);


