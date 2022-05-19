import { Pressable, StyleSheet } from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'

const BackButton = ({navigation}) => {
  return (
    <Pressable style={styles.returnButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" color="white" size={40}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    returnButton: {
        position: "absolute",
        backgroundColor: 'black',    
        padding: 10,
        top: 20,
        left: 20,
    },
    returnButtonText: {
        fontSize: 30,
        color: 'white'
    }
})

export default BackButton