import { SafeAreaView, Text, Pressable, StyleSheet, TextInput, Button} from 'react-native'
import React, {useState} from 'react'

//functions
import { ChangeIntroStatus } from '../../functions/storage/ChangeInitialScreen'

//api date
import { DatePicker } from 'react-native-woodpicker'
import TextInputMask from 'react-native-masked-text'

const InputDateScreen = ({navigation}) => {
  
  // ========================================= VALIDATION OF THE INPUT =========================================
  const validateDate = () => {
    console.log(date);
    if (date == "24/01")
    {
      ChangeIntroStatus(true)
      navigation.navigate('NavigationActScreen')
    }
    else
      alert("Ce n'est pas la bonne date")
  }

  const [date, setDate] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>J’espère que t’as toujours le post-it, sinon on va pas pouvoir continuer l’aventure ensemble, et je ne pourrais pas t’aider, malheureusement mon téléphone ne sera pas opérationnel, bon maintenant que tout est dit, veux-tu bien entré la date écrit sur le papier:</Text>

      {/* input */}
      <TextInput
        onChangeText={(text) => {
          setDate(
            text.length === 3 && !text.includes("/")
              ? `${text.substring(0, 2)}/${text.substring(2)}`
              : text
          );
        }}
        placeholder="JJ/MM"
        placeholderTextColor="gray"
        style={styles.input} 
        keyboardType="number-pad"
        maxLength={5}
        returnKeyType="done"
        value={date}
      />

      {/* Button  */}
      <Pressable style={styles.button} onPress={() => validateDate()}>
        <Text style={styles.buttonText}>VALIDER</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center', //Centered horizontally
      alignItems: 'center', //Centered vertically
      flex:1
  },
  text: {
      width: "90%",
      textAlign: "center",
      fontSize: 25,
  },
  button: {
      backgroundColor: "black",
      width: 130,
      height: 130 / 2,
      margin: 20,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center"
  },
  buttonText: {
      color: "white",
      fontSize: 20,
  },
  input: {
    marginTop: 100,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 100,
    textAlign: "center"
  }
})
export default InputDateScreen