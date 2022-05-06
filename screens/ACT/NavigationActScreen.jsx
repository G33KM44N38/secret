import { SafeAreaView, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const NavigationActScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Act 1</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Act 2</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Act 3</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Act 4</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    width: "80%",
    margin: 10,
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