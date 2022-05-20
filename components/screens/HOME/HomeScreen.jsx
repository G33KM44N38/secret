import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, {useEffect, useState, useCallback} from 'react'
import { useFocusEffect  } from "@react-navigation/native"

const HomeScreen = ({navigation}) => {

  const [BeginGame, setBeginGame] = useState(false)

  const CanTheGameBeing = () => {
    if(new Date() >= new Date('May 20, 2022 9:00:00'))  
      setBeginGame(true)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      CanTheGameBeing()
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <>
      {
        BeginGame ?

          <View style={styles.container}>
            <Text style={styles.text}>Bonjour Boudi on va jouer à un petit jeu, t’es partante?</Text>

            <Pressable style={styles.button} onPress={() => navigation.navigate('homeAcceptedScreen')}>
                <Text style={styles.buttonText}>OUI</Text>
              </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate('HomeDeniedScreen')}>
                <Text style={styles.buttonText}>NON</Text>
            </Pressable>
          </View>
        : 
        <Pressable style={styles.container} onPress={() => CanTheGameBeing()}>
          <Text>L'application se debloquera a 9h le 20 mai 2020</Text>
        </Pressable>
      }
    </>

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
        fontSize: 30,
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
    }
})



export default HomeScreen