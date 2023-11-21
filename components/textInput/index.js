import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

const TextInputCustom = props => {
  return (
    <TextInput
      style={{
        width: '100%',
        alignItems: 'center',
        marginBottom: 8,
        padding: 16,
      }}
      placeholder={props.hintText}
      secureTextEntry={props.isSecureEntry}
      onChangeText={props.onChangeText}
    />
  );
};

export default TextInputCustom;
