import {View, Text} from 'react-native';
import React from 'react';
import styles from '../login/style';

const Dashboard = props => {
  const {text, title} = props.route.params;

  return (
    <View style={styles.screenContainer}>
      <Text>{text}</Text>
    </View>
  );
};

export default Dashboard;
