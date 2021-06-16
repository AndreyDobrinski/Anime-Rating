import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';


export default function AppHeader({ navigation, title }) {

    const pressHandler = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }

    return (
        <View style={styles.header} >
            <MaterialIcons name='menu' size={28} onPress={pressHandler} style={styles.burger} />
            <View style={styles.headerHolder}>
                <Image source={require('../assets/img/heart_logo.png')} style={styles.headerImg} />
                <Text style={styles.headerTxt}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        // width: Dimensions.get('screen').width,
        // height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 10,

    },
    burger: {
        position: 'absolute',
        left: 1,

    },
    headerHolder: {
        flexDirection: 'row',
    },
    headerTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#444',
        letterSpacing: 2,

    },
    headerImg: {
        width: 26,
        height: 26,
        marginRight: 15,

    }



});