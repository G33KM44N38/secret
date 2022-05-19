import { SafeAreaView, Text, Pressable, StyleSheet, TextInput, Button} from 'react-native'
import React, {useState} from 'react'

//functions
import { ChangeIntroStatus } from '../../functions/storage/ChangeInitialScreen'

//api date
import { DatePicker } from 'react-native-woodpicker'

const InputDateScreen = ({navigation}) => {
  
  const [pickedDate, setPickedDate] = useState(new Date());

  const handleText = () : String => pickedDate
      ? pickedDate.toDateString()
      : "No value Selected";

  // ========================================= VALIDATION OF THE INPUT =========================================
  const validateDate = () => {
    console.log(pickedDate);
    // if (pickedDate.includes(""))
    // {
    //   ChangeIntroStatus(true)
    //   // navigation.navigate('NavigationActScreen')
    // }
    // else
    //   alert("Ce n'est pas la bonne date")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>J’espère que t’as toujours le post-it, sinon on va pas pouvoir continuer l’aventure ensemble, et je ne pourrais pas t’aider, malheureusement mon téléphone ne sera pas opérationnel, bon maintenant que tout est dit, veux-tu bien entré la date écrit sur le papier:</Text>

      {/* input */}
      {/* <TextInput keyboardType="numeric" placeholder='XX/XX/XXXX' style={styles.input} onChangeText={inputDate => setDate(inputDate)}/> */}
      <DatePicker
        value={pickedDate}
        onDateChange={setPickedDate}
        text={handleText()}
        isNullable={false}
        textColor="black"
        androidMode="calendar"
        androidDisplay="calendar"
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