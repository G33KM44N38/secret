import { SafeAreaView, Text, Pressable } from 'react-native'
import React from 'react'

const HomeDeniedScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{justifyContent: "center", alignItems: "center",  flex: 1}}>

      <Text style={{ textAlign: "center", fontSize: 30}}>
        Allez je te pensais plus joueuse que ça dès le matin, tu boudes déjà ? je te laisse réessayer
      </Text>

      <Pressable onPress={() => navigation.goBack()} style={{backgroundColor: "black", margin: 20, height: 130/2, width: 130, borderRadius: 10}}>
        <Text style={{color: "white", padding: 15, fontSize: 30, textAlign: "center"}}>OK</Text>
      </Pressable>

    </SafeAreaView>
  )
}

export default HomeDeniedScreen