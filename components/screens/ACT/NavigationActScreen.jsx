import { SafeAreaView, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

//navigatoin API
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Act1Screen from './Act1/Act1Screen';
import Act2Screen from './Act2/Act2Screen';
import Act3Screen from './Act3/Act3Screen';
import FinScreen from './Fin/FinScreen';

const Stack = createNativeStackNavigator();

const NavigationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Act1Screen')}>
        <Text style={styles.text}>Act 1</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Act2Screen')}>
        <Text style={styles.text}>Act 2</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Act3Screen')}>
        <Text style={styles.text}>Act 3</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('FinScreen')}>
        <Text style={styles.text}>Fin</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const NavigationActScreen = () => {
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="NavigationActScreen" component={NavigationScreen}/>
        {/* ACT 1 */}
        <Stack.Screen name="Act1Screen" component={Act1Screen}/>
        {/* ACT2 */}
        <Stack.Screen name="Act2Screen" component={Act2Screen}/>
        {/* ACT3 */}
        <Stack.Screen name="Act3Screen" component={Act3Screen}/>
        {/* FinScreen */}
        <Stack.Screen name="FinScreen" component={FinScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    width: "80%",
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 50,
    padding: 10,
  }

})

export default NavigationActScreen