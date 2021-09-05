import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SignUpScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';

const App = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setLogin(true), setSignup(false);
        }}>
        <Text>Login Form</Text>
      </TouchableOpacity>
      {login && <SigninScreen />}
      <TouchableOpacity
        onPress={() => {
          setSignup(true), setLogin(false);
        }}>
        <Text>Signup Form</Text>
      </TouchableOpacity>
      {signup && <SignUpScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
