import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonCustom = props => {
  return (
    <TouchableOpacity
      style={[
        {
          width: '45%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'pink',
          borderRadius: 8,
          padding: 8,
        },
        props.style,
      ]}
      onPress={props.onPress}>
      <Text style={{color: 'yellow', fontSize: 16}}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
