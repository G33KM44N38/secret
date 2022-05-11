import { View, Text, Pressable, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Swiper from 'react-native-swiper'

//functions
import { makeAct3Done } from '../../../../functions/storage/navigationScreenData'

const act3Stack = createNativeStackNavigator()

const Act3StoryScreen = ({navigation}) => {

  const validateAct3 = () => {
    makeAct3Done().then(
      navigation.navigate('NavigationScreen')
    )
  }
  return (
    <Swiper horizontal={false} loop={false}>
      {/* ======================= SCREEN 1 =======================*/}
      <SafeAreaView style={styles.centeredView}>
        <Text style={styles.text}>
          Tu te rappelles de cette soirée, ou l’on vivait encore ensemble, posé dans le lit avec une envie de restaurant
        </Text>
      </SafeAreaView>
      {/* ======================= SCREEN 2 =======================*/}
      <SafeAreaView style={styles.centeredView}>
        <Text style={styles.text}>
          je pense que pour toi c’est devenu un incontournable de la vie grenobloise, on en rêvait même en étant en Espagne.
        </Text>
      </SafeAreaView>
      {/* ======================= SCREEN 3 =======================*/}
      <SafeAreaView style={styles.centeredView}>
        <Text style={styles.text}>
          Bon je pense que tu te rappelles du nom de restaurant, et bien je t’y attends pour 20h.
        </Text>
      </SafeAreaView>
      {/* ======================= SCREEN 4 =======================*/}
      <SafeAreaView style={styles.centeredView}>
        <Text style={styles.text}>
          À tout à l’heure
        </Text>
        <Pressable style={styles.button} onPress={() => validateAct3()}>
          <Text style={styles.buttonText}>Bien sur si c'est toi qui paie</Text>
        </Pressable>
      </SafeAreaView>
    </Swiper>

  )
}

const Act3Begin = ({navigation}) => {
  return(
    <SafeAreaView style={styles.centeredView}>
      <Text>
      Bon je pense que tu t’attendais à avoir le petit message d’après activité, est-ce que ce spa et ce massage t’ont plu, es-tu bien détendu ? Et surtout prête pour la suite ?
      </Text>
      {/* ================== BUTTONS ==================*/}
      <Pressable style={styles.button} onPress={() => navigation.navigate('Act3StoryScreen')}>
        <Text style={styles.buttonText}>OUI </Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>NON</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const Act3Screen = () => {
  return (
    <act3Stack.Navigator screenOptions={{headerShown: false}}>
      <act3Stack.Screen name='Act3Begin' component={Act3Begin}/>
      <act3Stack.Screen name='Act3StoryScreen' component={Act3StoryScreen}/>
    </act3Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 40,
    width: "80%",
    textAlign: "center"
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    textAlign: "center"
  }
})

export default Act3Screen