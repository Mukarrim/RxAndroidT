import {View, Text, SafeAreaView, Button, TextInput} from 'react-native';
import React from 'react';
import {Login, Dashboard} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import NavigationScreens from './navigation';

function App() {
  return (
    <NavigationContainer>
      <NavigationScreens />
    </NavigationContainer>
  );
}

export default App;
