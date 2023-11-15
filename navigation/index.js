import {View, Text, Button} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Dashboard} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const NavigationScreens = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Welcome',
          headerRight: () => (
            <Button
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
              title="Zoo"
              color="#000"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationScreens;
