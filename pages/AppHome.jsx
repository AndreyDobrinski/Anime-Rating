import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../assets/Styles/global';
import ReviewForm from '../components/ReviewForm';



export default function AppHome({ navigation }) {

    // const pressHandler = () => {
    // navigation.navigate('AppAbout')
    // console.log(navigation);
    // }


    const [openModal, setOpenModal] = useState(false)
    const [reviews, setReviews] = useState([
        { title: 'Dragon ball', rating: 3, desc: 'lorem ipsum', _id: '1' },
        { title: 'Overlord', rating: 5, desc: 'lorem ipsum', _id: '2' },
        { title: 'Bleach', rating: 4, desc: 'lorem ipsum', _id: '3' },
    ])

    const addReview = (review) => {
        review._id = Math.random().toString()
        setReviews((prevReviews) => {
            return [
                review,
                ...prevReviews
            ]
        })
        setOpenModal(false)
    }


    return (

        <View style={styles.appHome}>

            <View style={globalStyles.content} style={styles.modal} >

                <Modal visible={openModal} animationType='slide' >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View >
                            <MaterialIcons name='close' size={24} onPress={() => setOpenModal(false)} style={styles.iconClose} />
                            <ReviewForm addReview={addReview} />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <MaterialIcons name='add' size={24} onPress={() => setOpenModal(true)} style={styles.iconAdd} />


                <FlatList
                    style={globalStyles.txtList}
                    data={reviews}
                    keyExtractor={(review) => review._id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <View style={styles.txtPreview}>
                                <Text style={styles.titleTxt}>{item.title}</Text>
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
    modal: {
        flex: 1,

    },
    iconClose: {
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        borderColor: '#f2f2f2',


    },
    iconAdd: {
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',

    },
    txtList: {
        // marginTop: 20,
    },
    txtPreview: {
        borderWidth: 2,
        marginVertical: 20,
        marginHorizontal: 30,
    },
    titleTxt: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    },
});
