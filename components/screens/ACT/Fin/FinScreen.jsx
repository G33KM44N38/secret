import { View, Text, SafeAreaView, StyleSheet, TextInput, Pressable, Linking} from 'react-native'
import React, {useState} from 'react'

import Swiper from 'react-native-swiper'

import BackButton from '../../../button/BackButton'

const FinScreen = ({navigation}) => {

  const [Word, setWord] = useState("")

  const validateEndInput = () => {
    if (Word == "eternel" || Word == "éternel")
      Linking.openURL('https://open.spotify.com/track/108TCF0NVAH4MDYwub3pph?si=I5__ynGLQKy3pYpYnsFqhQ')
    else
      alert("Ce n'est pas le bon mot")
  }

  return (
    <Swiper loop={false}>
      {/* ================= SCREEN 1  =================*/}
      <SafeAreaView style={styles.centeredView}>
      <BackButton navigation={navigation}/>
        <Text style={styles.text}>Bon j’espère que cette journée t’as plu, voila pourquoi le post-it était ici tout ce temps, ce moment gravé dans ma mémoire, tu étais sous la douche, en train de chanter comme d’habitude, et l’idée m’est venu.</Text>
      </SafeAreaView>

      {/* ================= SCREEN 2  =================*/}
      <SafeAreaView style={styles.centeredView}>
      <BackButton navigation={navigation}/>
        <Text style={styles.text}>j’espère que tu l’as encore, je te laisse rentrer le mot a l’arrière et profiter</Text>
        <Text style={styles.text}>Joyeux 21 année😘</Text>
        <TextInput
        style={{borderBottomColor: "black", borderBottomWidth: 2, width: "30%", margin: 20, fontSize: 20, textAlign: "center"}}
        onChangeText={input => setWord(input.toLowerCase())}
        maxLength={7}/>
        <Pressable style={styles.button} onPress={() => validateEndInput()}>
          <Text style={styles.buttonText}>VALIDER</Text>
        </Pressable>
      </SafeAreaView>
    </Swiper>
  )
}
const styles = StyleSheet.create({
  centeredView: {
      flex: 1,
      padding: "5%",
      alignItems: "center",
      justifyContent: "center"
  },
  text: {
      textAlign: "center",
      fontSize: 30,
      marginBottom: 10,
      width: "80%",
  },
  button: {
      borderRadius: 10,
      backgroundColor: "black",
      margin: 10,
      padding: 10,
      width: "50%",
      textAlign: "center"
  },
  buttonText:{
      fontSize: 20,
      color: "white",
      textAlign: "center",
  },
})

export default FinScreen