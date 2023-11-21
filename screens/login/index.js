import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {ButtonCustom, TextInputCustom} from '../../components';

const Login = props => {
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  return (
    <View style={styles.screenContainer}>
      <TextInputCustom
        hintText="Enter Email"
        onChangeText={newText => {
          setEmailState(newText);
        }}
      />

      <TextInputCustom
        hintText="Enter Password"
        isSecureEntry
        onChangeText={newText => {
          setPasswordState(newText);
        }}
      />

      <ButtonCustom
        style={{marginTop: 8, backgroundColor: 'black'}}
        buttonText="Login"
        onPress={() => {
          props.navigation.navigate('Dashboard', {
            text: 'Hello',
            title: 'New Stuff',
          });
        }}
      />
    </View>
  );
};

export default Login;
