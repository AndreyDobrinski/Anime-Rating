import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../assets/Styles/global';



export default function AppAbout({ navigation }) {


    // const pressHandler = () => {
    //     navigation.goBack()
    // }

    return (

        <View style={globalStyles.content} >

            <Text>About</Text>
            <Text>About</Text>
            <Text>About</Text>
            <Text>About</Text>

            {/* <Button title='Go back to Home' onPress={pressHandler} /> */}


        </View>

    );
}


