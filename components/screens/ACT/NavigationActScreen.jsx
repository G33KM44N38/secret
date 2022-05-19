import { SafeAreaView, Text, Pressable, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'

//navigatoin API
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFocusEffect } from "@react-navigation/native"
//Screens
import Act1ScreenListOfPossibility from './Act1/Screens/Act1ScreenListOfPossibility';
import Act2Screen from './Act2/screens/Act2Screen';
import Act3Screen from './Act3/Screens/Act3Screen'
import FinScreen from './Fin/FinScreen';


//storage API
import { readAct1Done, readAct2Done, readAct3Done  } from '../../functions/storage/navigationScreenData';

const Stack = createNativeStackNavigator();

//functions
import { MakeAllActNotDone } from '../../functions/storage/changeActStatus';
import { ChangeIntroStatus } from '../../functions/storage/ChangeInitialScreen';

const NavigationScreen = ({navigation}) => {
  const [Act1Status, setAct1Status] = useState(false)
  const [Act2Status, setAct2Status] = useState(false)
  const [Act3Status, setAct3Status] = useState(false)

  const RestartAll = () => {
    ChangeIntroStatus(false)
    MakeAllActNotDone(setAct1Status, setAct2Status, setAct3Status)
  }

  var ActualDate = new Date('May 20, 2022 11:30:00');
  var dateLimitForDisplayAct2 = new Date('May 20, 2022 11:30:00');
  var dateLimitForDisplayAct3 = new Date('May 20, 2022 18:00:00');
  var dateLimitForDisplayFin = new Date('May 20, 2022 22:00:00');

  var displayAct2 = () => {
    if ( Act1Status == true && ActualDate > dateLimitForDisplayAct2) 
      return true
    else
      return false
  }

  var displayAct3 = () => {
    if ( Act2Status == true && ActualDate > dateLimitForDisplayAct3) 
      return true
    else
      return false
  }

  var displayActFin = () => {
    if ( Act3Status == true && ActualDate > dateLimitForDisplayFin) 
      return true
    else
      return false
  }

  useFocusEffect(
    React.useCallback(() => {
      readAct1Done()
      .then(function(res) { setAct1Status(res.act1Done) })
  
      readAct2Done()
      .then(function(res) { setAct2Status(res.act2Done) })
  
      readAct3Done()
      .then(function(res) { setAct3Status(res.act3Done) })
    }, [])
  ); 

  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Pressable style={styles.button} onPress={() => RestartAll()}>
        <Text style={styles.text}>Restart All</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => compaerTwoDate()}>
        <Text style={styles.text}>date</Text>
      </Pressable>

      {/* ============================= ACT 1 BUTTON ============================= */}
      <Pressable style={styles.button} onPress={() => navigation.navigate('Act1Screen')}>
        <Text style={styles.text}>Act 1</Text>
      </Pressable>

      {/* ============================= ACT 2 BUTTON ============================= */}
      {displayAct2() ? 
        <Pressable style={styles.button} onPress={() => navigation.navigate('Act2Screen')}>
          <Text style={styles.text}>Act 2</Text>
        </Pressable>
      :Act1Status == true ?
      <Pressable style={styles.buttonDesactivate} >
        <Text style={{color: "white"}}>L'act 2 se debloque a 11h30</Text>
      </Pressable> : null}

      {/* ============================= ACT 3 BUTTON ============================= */}
      {displayAct3() ? 
        <Pressable style={styles.button} onPress={() => navigation.navigate('Act3Screen')}>
          <Text style={styles.text}>Act 3</Text>
        </Pressable>
      :
      Act2Status == true ? 
      <Pressable style={styles.buttonDesactivate} >
        <Text style={{color: "white"}}>L'act 3 se debloque a 18h00</Text>
      </Pressable> : null}

      {/* ============================= ACT FIN BUTTON ============================= */}
      {displayActFin() ? 
        <Pressable style={styles.button} onPress={() => navigation.navigate('FinScreen')}>
          <Text style={styles.text}>Fin</Text>
        </Pressable>
      :Act3Status == true ?
        <Pressable style={styles.buttonDesactivate} >
          <Text style={{color: "white"}}>Le dernier act se debloque a 22h</Text>
        </Pressable> : null}

    </SafeAreaView>
  )
}

const NavigationActScreen = () => {
  return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="NavigationScreen" component={NavigationScreen}/>
        {/* ACT 1 */}
        <Stack.Screen name="Act1Screen" component={Act1ScreenListOfPossibility}/>
        {/* ACT2 */}
        <Stack.Screen name="Act2Screen" component={Act2Screen}/>
        {/* ACT3 */}
        <Stack.Screen name="Act3Screen" component={Act3Screen}/>
        {/* FinScreen */}
        <Stack.Screen name="FinScreen" component={FinScreen}/>
      </Stack.Navigator>
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
  buttonDesactivate: {
    backgroundColor: "gray",
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