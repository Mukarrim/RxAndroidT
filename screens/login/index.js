import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './style';

const Login = props => {
  return (
    <View style={styles.screenContainer}>
      <Button
        title="Login"
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
