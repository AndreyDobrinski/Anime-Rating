import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/Styles/global';



export default function AppHome({ navigation }) {

    // const pressHandler = () => {
    // navigation.navigate('AppAbout')
    // console.log(navigation);
    // }


    const [reviews, setReviews] = useState([
        { title: 'Dragon ball', rating: 3, desc: 'lorem ipsum', _id: '1' },
        { title: 'Overlord', rating: 5, desc: 'lorem ipsum', _id: '2' },
        { title: 'Bleach', rating: 4, desc: 'lorem ipsum', _id: '3' },
    ])


    return (

        <View style={styles.appHome}>

            <View style={globalStyles.content} >

                <FlatList
                    style={globalStyles.txtList}
                    data={reviews}
                    keyExtractor={(review) => review._id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <View style={globalStyles.txtPreview}>
                                <Text style={globalStyles.titleTxt}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />

                {/* <Button title='Go to About' onPress={pressHandler} /> */}

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    appHome: {
        flex: 1,
    },
});
