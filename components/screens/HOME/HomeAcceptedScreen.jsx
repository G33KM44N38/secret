import { View, Text, Pressable, SafeAreaView } from 'react-native'
import React from 'react'

//functions
import { MakeAllActNotDone, makeAllActTrue } from '../../functions/storage/changeActStatus'

const HomeAcceptedScreen = ({ navigation }) => {

  const validate = () => {
    MakeAllActNotDone()
    navigation.navigate('InputDateScreen')
  }
  return (
    <SafeAreaView style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
      <Pressable style={{width: "100%", alignItems: "center"}} onPress={() => validate()}>
        <Text style={{textAlign: "center", justifyContent: "center", width: "90%"}}>
          C’est actuellement le Kylian du 23 février qui te parle, j’espère que tu vas bien, que tu as bien dormi et que tu es prête pour cette journée, bon sans plus attendre entrons dans le vif du sujet
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default HomeAcceptedScreen