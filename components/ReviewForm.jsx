import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'

import SubmitButton from '../components/ButtonSubmitForm'

import { globalStyles } from '../assets/Styles/global';


const reviewSchema = yup.object({
    title: yup.string().required().min(3),
    // the title has to be string and its required to fill before submit and the minimum title length is 3
    desc: yup.string().required().min(3),
    // same like the title
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number from 1-5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
    })
    //the test : 1st: is the name for the test (it can be any name) . 2nd: A feedback message that will show up . 3rd: The fumc that will cheack it.
})

export default function ReviewForm({ addReview }) {



    return (

        <View style={styles.form} >

            <Formik
                initialValues={{ title: '', desc: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm() // to clear the form on submit
                    addReview(values)
                }}>
                {(props) => (
                    <View >
                        <TextInput
                            style={styles.input}
                            placeholder='Anime Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        // onBlur : for a real time validation for the warnings 
                        />
                        <Text style={styles.inputError}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            multiline minHeight={50}
                            // it can be multy line and its min height is 50 
                            style={styles.input}
                            placeholder='About the anime...'
                            onChangeText={props.handleChange('desc')}
                            value={props.values.desc}
                            onBlur={props.handleBlur('desc')}
                        />
                        <Text style={styles.inputError}>{props.touched.desc && props.errors.desc}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={styles.inputError}>{props.touched.rating && props.errors.rating}</Text>
                        <View style={styles.submitBtn} >
                            <SubmitButton text='sumbit' onPress={props.handleSubmit} />
                        </View>
                    </View>

                )}

            </Formik>

        </View>

    );
}


const styles = StyleSheet.create({

    form: {
        height: '100%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        fontSize: 18,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,

    },
    inputError: {
        marginHorizontal: 20,
        color: 'crimson',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    submitBtn: {
        marginHorizontal: 20,
        marginVertical: 10,

    }



});

