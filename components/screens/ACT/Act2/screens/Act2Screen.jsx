import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput, Linking} from 'react-native'
import React , {useState} from 'react'

//swipe API
import Swiper from 'react-native-swiper'

//function
import { makeAct2Done } from '../../../../functions/storage/navigationScreenData'

const Act2Screen = ({navigation}) => {

  const [inputAct2, setinputAct2] = useState("")

  const validateAnswerAct2 = () => {
    if( inputAct2 == "spa")
    {
      makeAct2Done()
      .then(navigation.goBack())
      .then(Linking.openURL("https://www.google.com/maps/place/Château+Hôtel+de+la+Commanderie/@45.1477778,5.7467002,17z/data=!3m1!4b1!4m8!3m7!1s0x478a8ad652bd5455:0xf2ab086d1844f8b8!5m2!4m1!1i2!8m2!3d45.1477778!4d5.7488889"))
    } else {
      alert("ce n'est pas la bonne réponse")
    }
  }

  return (
      <Swiper loop={false} horizontal={false}>

      {/* =============================== VIEW 1 ===============================*/}
        <SafeAreaView style={styles.centeredView}>
          <Text style={{fontSize: 30, textAlign: 'center', width: "80%"}}>Bon un peu de temps est passé je pense que tu as été impatiente, ça doit te faire bizarre de ne pas avoir de mes news, en tout cas le moi de passé se le dit.</Text>
        </SafeAreaView>

      {/* =============================== VIEW 2 ===============================*/}
        <SafeAreaView style={styles.centeredView}>
          <Text style={{fontSize: 30, textAlign: 'center', width: "80%"}}>
            Pour la prochaine étape, je vais te demander de fouiller dans ta mémoire, tu te rappelle quand on était dans le sud, on a eu notre petit moment à nous ou nous sommes allez-nous relaxer, loin de la maison des secret
          </Text>
        </SafeAreaView>

      {/* =============================== VIEW 3 ===============================*/}
        <SafeAreaView style={styles.centeredView}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>
          Tu te rappelles de notre activité ?
          </Text>
          <TextInput style={{borderBottomColor: "black", borderBottomWidth: 2, width: "30%", margin: 20, fontSize: 20, textAlign: "center"}}
          placeholder="en 3 lettre"
          onChangeText={input => setinputAct2(input.toLowerCase())}
          />
          <Pressable style={{backgroundColor: "black", padding: 10, borderRadius: 10}} onPress={() => validateAnswerAct2()}>
            <Text style={{color: "white", fontSize: 40}}>VALIDER</Text>
          </Pressable>
        </SafeAreaView>
      </Swiper>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Act2Screen