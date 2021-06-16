import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';





// import { AppNavigator } from './routes/HomeStack';
import AppDrawer from './routes/Drawer';


const getFonts = () => Font.loadAsync({
  'russoOne': require('./assets/Fonts/RussoOne-Regular.ttf')
})




export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false)


  if (fontLoaded) {
    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
        console.log('byebye Keyboard')
      }}>

        <View style={styles.container}>

          <View style={styles.routs}>
            {/* <AppNavigator /> */}
            <AppDrawer />
          </View>

        </View>
      </TouchableWithoutFeedback>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  routs: {
    flex: 1,
  },

});


