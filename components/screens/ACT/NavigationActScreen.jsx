import { SafeAreaView, Text, Pressable, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'

//navigatoin API
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Act1Screen from './Act1/Act1Screen';
import Act2Screen from './Act2/Act2Screen';
import Act3Screen from './Act3/Act3Screen';
import FinScreen from './Fin/FinScreen';


//storage API
import { readAct1Done, readAct2Done, readAct3Done, makeAct1Done, makeAct2Done, makeAct3Done, makeAct1NotDone, makeAct2NotDone, makeAct3NotDone } from '../../functions/storage/navigationScreenData';

//functions
import { changeAct1Status } from './Act1/MakeAct1Done';
import { changeAct2Status } from './Act2/MakeAct2Done';
import { changeAct3Status } from './Act3/MakeAct3Done';

const Stack = createNativeStackNavigator();

const NavigationScreen = ({navigation}) => {
  const [Act1Status, setAct1Status] = useState(false)
  const [Act2Status, setAct2Status] = useState(false)
  const [Act3Status, setAct3Status] = useState(false)
  
  // TEST
  const makeAllActTrue = () => {
    changeAct1Status(setAct1Status)
    changeAct2Status(setAct2Status)
    changeAct3Status(setAct3Status)
    
  }

  const MakeAllActNotDone = () => {
    makeAct1NotDone().then(
      readAct1Done()
      .then(function(res) {
        setAct1Status(res.act1Done)
      }))

    makeAct2NotDone().then(
      readAct2Done()
      .then(function(res) {
        setAct2Status(res.act2Done)
      }));

    makeAct3NotDone().then(
      readAct3Done()
      .then(function(res) {
        setAct3Status(res.act3Done)
      }));
  }

  useEffect(() => {
    readAct1Done()
    .then(function(res) { setAct1Status(res.act1Done) })

    readAct2Done()
    .then(function(res) { setAct2Status(res.act2Done) })

    readAct3Done()
    .then(function(res) { setAct3Status(res.act3Done) })
  }, [])
  

  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Pressable style={styles.button} onPress={() => makeAllActTrue()}>
        <Text style={styles.text}>TRUE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => MakeAllActNotDone()}>
        <Text style={styles.text}>FALSE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Act1Screen')}>
        <Text style={styles.text}>Act 1</Text>
      </Pressable>
      {Act1Status == true ? 
        <Pressable style={styles.button} onPress={() => navigation.navigate('Act2Screen')}>
          <Text style={styles.text}>Act 2</Text>
        </Pressable>
      :null}

      {Act2Status == true ? 
        <Pressable style={styles.button} onPress={() => navigation.navigate('Act3Screen')}>
          <Text style={styles.text}>Act 3</Text>
        </Pressable>
      :null}

      {Act3Status == true ? 
        <Pressable style={styles.button} onPress={() => navigation.navigate('FinScreen')}>
          <Text style={styles.text}>Fin</Text>
        </Pressable>
      :null}

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