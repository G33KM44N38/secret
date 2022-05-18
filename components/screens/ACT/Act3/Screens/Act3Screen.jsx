import { View, Text, Pressable, SafeAreaView, StyleSheet, Modal} from 'react-native'
import React, {useState} from 'react'

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

  const [ShowModal, setShowModal] = useState(false)

  return(
    <SafeAreaView style={styles.centeredView}>

      <Text style={styles.text}>Est-ce que ce spa et ce massage t’ont plu, es-tu bien détendu ?</Text>
      <Text style={styles.text}>Et surtout es-tu prête pour la suite ?</Text>
      {/* ================== BUTTONS ==================*/}
      <Pressable style={styles.button} onPress={() => navigation.navigate('Act3StoryScreen')}>
        <Text style={styles.buttonText}>OUI </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setShowModal(!ShowModal)}>
        <Text style={styles.buttonText}>NON</Text>
      </Pressable>

        {/* ============================ MODAL ============================ */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={ShowModal}>
            <View style={styles.modalView}>
                <View style={styles.modalContentWrongChoice}>
                    <Pressable style={styles.closeButton} onPress={() => setShowModal(!ShowModal)}>
                        <Text style={{fontWeight: "bold", fontSize: 30}}>X</Text>
                    </Pressable>
                    <Text style={styles.text}>Ouais c'est vrai qu'elles massaient ultra mal, et que le thé était pas ouf du tout beurk</Text>
                </View>
            </View>

        </Modal>
    </SafeAreaView>

)}

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
    textAlign: "center",
  },
  button: {
    backgroundColor: 'black',
    width: "50%",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    textAlign: "center"
  },
    // ============ MODAL ============
    modalView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modalContentWrongChoice: {
      alignItems: "center",
      padding: 20,
      width: "80%",
      justifyContent: "center",
      backgroundColor: "white",
      borderRadius: 10
  },
  modalContentGoodChoice: {
      alignItems: "center",
      padding: 20,
      width: "80%",
      justifyContent: "center",
      backgroundColor: "green",
      borderRadius: 10
  },
  modalButton: {
      backgroundColor: "black",
      borderRadius: 10,
      padding: 10,
  },
  modalButtonText: {
      fontSize: 30,
      color: "white"
  },
  // CLOSE BUTTON
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 10,
  }
})

export default Act3Screen