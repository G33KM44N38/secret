import React from 'react'

//swiper
import Swiper from 'react-native-swiper'

//navigatoin API
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Screens
import Act1ScreenListOfPossibility from './Act1ScreenListOfPossibility';

const Act1Screen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='Act1ScreenListOfPossibility' component={Act1ScreenListOfPossibility} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Act1Screen