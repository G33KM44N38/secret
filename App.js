import { useEffect, useState, useLayoutEffect } from 'react';

//navigation API
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screen
import HomeScreen from './components/screens/HOME/HomeScreen';
import HomeAcceptedScreen from './components/screens/HOME/HomeAcceptedScreen'
import HomeDeniedScreen from './components/screens/HOME/HomeDeniedScreen';
import InputDateScreen from './components/screens/HOME/InputDateScreen';
import NavigationActScreen from './components/screens/ACT/NavigationActScreen';

//functions
import { ReadIntroStatus } from './components/functions/storage/ChangeInitialScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [IntroDone, setIntroDone] = useState(false)

  useEffect(() => {
    ReadIntroStatus().then((res) => {
      setIntroDone(res)
    })
  
    }, [IntroDone])
  

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {IntroDone ?
            <Stack.Screen name='NavigationActScreen' component={NavigationActScreen}/>
          :
          <>
            <Stack.Screen name='homeScreen' component={HomeScreen}/>
            <Stack.Screen name='homeAcceptedScreen' component={HomeAcceptedScreen}/>
            <Stack.Screen name='HomeDeniedScreen' component={HomeDeniedScreen}/>
            <Stack.Screen name='InputDateScreen' component={InputDateScreen}/>
          </>
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
}