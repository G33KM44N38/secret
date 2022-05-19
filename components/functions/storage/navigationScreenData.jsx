import AsyncStorage from '@react-native-async-storage/async-storage';

//Act 1
export const makeAct1Done = async () => {
    try {
      const jsonValue = JSON.stringify({act1Done: true})
      await AsyncStorage.setItem('Act1Done', jsonValue)
    } catch (e) {
      // saving error
    }
}

export const makeAct1NotDone = async () => {
    try {
      const jsonValue = JSON.stringify({act1Done: false})
      await AsyncStorage.setItem('Act1Done', jsonValue)
    } catch (e) {
      // saving error
    }
}

export const readAct1Done = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Act1Done')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}

//Act 2
export const makeAct2Done = async () => {
    try {
      const jsonValue = JSON.stringify({act2Done: true})
      await AsyncStorage.setItem('Act2Done', jsonValue)
    } catch (e) {
      // saving error
    }
}

export const makeAct2NotDone = async () => {
    try {
      const jsonValue = JSON.stringify({act2Done: false})
      await AsyncStorage.setItem('Act2Done', jsonValue)
    } catch (e) {
      // saving error
    }
}

export const readAct2Done = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Act2Done')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}

//Act 3
export const makeAct3Done = async () => {
    try {
      const jsonValue = JSON.stringify({act3Done: true})
      await AsyncStorage.setItem('Act3Done', jsonValue)
    } catch (e) {
      // saving error
    }
}

export const makeAct3NotDone = async () => {
    try {
      const jsonValue = JSON.stringify({act3Done: false})
      await AsyncStorage.setItem('Act3Done', jsonValue)
    } catch (e) {
      // saving error
    }
}

export const readAct3Done = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Act3Done')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}