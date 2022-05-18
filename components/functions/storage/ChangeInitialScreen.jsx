import AsyncStorage from '@react-native-async-storage/async-storage';

export const ChangeIntroStatus = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('IntroStatus', jsonValue)
    } catch (e) {
      // saving error
    }
}

export const ReadIntroStatus = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('IntroStatus')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}
