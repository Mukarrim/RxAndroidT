import {View, Text, SafeAreaView, Button, TextInput} from 'react-native';
import React from 'react';
import MyUi from './MyUi';

function LalaLand() {
  return (
    <MyUi
      something={() => {
        console.log('I am called with Lambda!');
      }}
    />
  );
}

export default LalaLand;
