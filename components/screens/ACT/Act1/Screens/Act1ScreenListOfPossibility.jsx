import { View, Text, Pressable, StyleSheet, Modal, Linking } from 'react-native'
import React, {useState} from 'react'

//functions
import { makeAct1Done } from '../../../../functions/storage/navigationScreenData'

const Act1ScreenListOfPossibility = ({navigation}) => {
    
    const [ShowGoodModal, setShowGoodModal] = useState(false)
    const [ShowWrongAnswerModal1, setShowWrongAnswerModal1] = useState(false)
    const [ShowWrongAnswerModal2, setShowWrongAnswerModal2] = useState(false)

    const goToPainCie = () => {
        makeAct1Done()
        .then(setShowGoodModal(!ShowGoodModal))
        .then(navigation.navigate('NavigationScreen'))
        .then(
            Linking.openURL('https://www.google.com/maps/place/Pain%26Cie/@45.1728246,5.7029288,14z/data=!4m9!1m2!2m1!1spain+et+cie!3m5!1s0x478af48a6f4f1f87:0xde1448c3f6e45a0f!8m2!3d45.1924749!4d5.7299686!15sCgtwYWluIGV0IGNpZVoNIgtwYWluIGV0IGNpZZIBEWJydW5jaF9yZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJuTkhKSFEyUlJFQUU')
        )

    }
  return (
    <View style={styles.centeredView}>
        <Text style={styles.text}>Parfait, t’as toujours à ce que je vois garde le précieusement, bon c’est le matin et qu’est-ce qu’on fait le matin ?</Text>
        <Pressable style={styles.button} onPress={() => setShowWrongAnswerModal1(!ShowWrongAnswerModal1)}>
            <Text style={styles.buttonText}>On se rendors dormir c’est vraiment trop bien</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setShowWrongAnswerModal2(!ShowWrongAnswerModal2)}>
            <Text style={styles.buttonText}>On commence par un bon verre de pipi d’ange</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setShowGoodModal(!ShowGoodModal)}>
            <Text style={styles.buttonText}>T’es une petit feignasse aller  lève tes fesses</Text>
        </Pressable>

        {/* ============================ MODAL WRONG CHOICE 1 ============================ */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={ShowWrongAnswerModal1}>
            <View style={styles.modalView}>
                <View style={styles.modalContentWrongChoice}>
                    <Pressable style={styles.closeButton} onPress={() => setShowWrongAnswerModal1(!ShowWrongAnswerModal1)}>
                        <Text style={{fontWeight: "bold", fontSize: 30}}>X</Text>
                    </Pressable>
                    <Text style={styles.text}>T’es une petit feignasse aller  lève tes fesses</Text>
                </View>
            </View>

        </Modal>
        {/* ============================ MODAL WRONG CHOICE 2 ============================ */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={ShowWrongAnswerModal2}>
            <View style={styles.modalView}>
                <View style={styles.modalContentWrongChoice}>
                    <Pressable style={styles.closeButton} onPress={() => setShowWrongAnswerModal2(!ShowWrongAnswerModal2)}>
                        <Text style={{fontWeight: "bold", fontSize: 30}}>X</Text>
                    </Pressable>
                    <Text style={styles.text}>Quand même c’est le matin on va pas commencer par un verre</Text>
                </View>
            </View>

        </Modal>

        {/* ============================ MODAL GOOD CHOICE ============================ */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={ShowGoodModal}>
            <View style={styles.modalView}>
                <View style={styles.modalContentGoodChoice}>
                    <Pressable style={styles.closeButton} onPress={() => setShowGoodModal(!ShowGoodModal)}>
                        <Text style={{fontWeight: "bold", fontSize: 30}}>X</Text>
                    </Pressable>
                    <Text style={styles.text}>Bon et bien je vois que t’es bien réveillé, bon et bien je t’attends pour déjeuner a Pain & Cie</Text>
                    <Pressable style={styles.modalButton} onPress={() => goToPainCie()}>
                        <Text style={styles.modalButtonText}>C'est parti</Text>
                    </Pressable>

                </View>
            </View>

        </Modal>

    </View>
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
    },
    button: {
        borderRadius: 10,
        backgroundColor: "black",
        margin: 10,
        padding: 10,
        width: "70%",
        textAlign: "center"
    },
    buttonText:{
        fontSize: 20,
        color: "white",
        textAlign: "center",
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
        backgroundColor: "red",
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

export default Act1ScreenListOfPossibility