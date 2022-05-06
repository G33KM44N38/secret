//navigation API
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screen
import HomeScreen from './components/screens/HOME/HomeScreen';
import HomeAcceptedScreen from './components/screens/HOME/HomeAcceptedScreen'
import HomeDeniedScreen from './components/screens/HOME/HomeDeniedScreen';
import InputDateScreen from './components/screens/HOME/InputDateScreen';
import NavigationActScreen from './components/screens/ACT/NavigationActScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='homeScreen' component={HomeScreen}/>
          <Stack.Screen name='homeAcceptedScreen' component={HomeAcceptedScreen}/>
          <Stack.Screen name='HomeDeniedScreen' component={HomeDeniedScreen}/>
          <Stack.Screen name='InputDateScreen' component={InputDateScreen}/>
          <Stack.Screen name='NavigationActScreen' component={NavigationActScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}