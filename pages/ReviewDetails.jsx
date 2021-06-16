import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../assets/Styles/global';



export default function ReviewDetails({ route, navigation }) {
    const { title, rating, desc } = route.params;

    return (

        <View style={globalStyles.content} >

            <View style={globalStyles.detailsHolder}>
                <Text style={globalStyles.detailsTxt}>{title} {rating}/5</Text>
                <Text style={globalStyles.detailsTxt}>{desc}</Text>
                <View style={globalStyles.ratingHolder}>
                    <Text style={styles.ratingTxt}>Rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </View>


        </View>

    );
}

const styles = StyleSheet.create({

    ratingTxt: {
        marginRight: 10,
    }


});