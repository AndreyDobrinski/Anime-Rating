import { StyleSheet } from 'react-native';



export const globalStyles = StyleSheet.create({

    content: {
        // flex: 1,
    },
    detailsHolder: {
        margin: 10,
        padding: 10,

    },
    detailsTxt: {
        fontSize: 18,
        marginBottom: 10,
    },
    ratingHolder: {
        borderTopWidth: 1,
        borderTopColor: '#cecece',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop:10,
    },


});


export const images = {
    ratings: {
        '1': require('../img/rating-1.png'),
        '2': require('../img/rating-2.png'),
        '3': require('../img/rating-3.png'),
        '4': require('../img/rating-4.png'),
        '5': require('../img/rating-5.png'),
    }
}