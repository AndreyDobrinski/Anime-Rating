import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';



export default function SubmitButton({ text, onPress }) {



    return (

        <TouchableOpacity onPress={onPress} >
            <View style={styles.button}>
                <Text style={styles.buttonTxt}>{text}</Text>
            </View>

        </TouchableOpacity>

    );
}


const styles = StyleSheet.create({

    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    buttonTxt: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',

    }

});
