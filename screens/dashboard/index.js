import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Dashboard = props => {
  const {text, title} = props.route.params;
  const data = [
    {
      id: '1',
      name: 'Item 1',
      desc: 'A  quick brown fox jumps over the lazy dog! ok this is more text here now and it should mess more',
    },
    {
      id: '2',
      name: 'Item 2',
      desc: 'A  quick brown fox jumps over the lazy dog!',
    },
    {
      id: '3',
      name: 'Item 3',
      desc: 'A  quick brown fox jumps over the lazy dog!',
    },
    {
      id: '4',
      name: 'Item 4',
      desc: 'A  quick brown fox jumps over the lazy dog!',
    },
    {
      id: '5',
      name: 'Item 5',
      desc: 'A  quick brown fox jumps over the lazy dog!',
    },
    // Add more items as needed
  ];

  return (
    <FlatList
      style={{width: '100%', paddingVertical: 16}}
      data={data}
      keyExtractor={item => {
        item.id;
      }}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Alert Title',
              'My Alert Msg',
              [
                {
                  text: 'Cancel',
                  // onPress: () => Alert.alert('Cancel Pressed'),
                  style: 'cancel',
                },
              ],
              {
                cancelable: true,
                // onDismiss: () =>
                //   Alert.alert(
                //     'This alert was dismissed by tapping outside of the alert dialog.',
                //   ),
              },
            );
          }}
          style={{
            flexDirection: 'row',
            backgroundColor: 'lightgray',
            borderRadius: 8,
            marginHorizontal: 12,
            marginBottom: 12,
            alignItems: 'center',
          }}>
          <Image
            style={{width: 120, height: 120}}
            source={{
              uri: `https://picsum.photos/id/${
                item.id + Math.floor(Math.random() * 100)
              }/200`,
            }}
          />
          <View style={{flex: 1, marginHorizontal: 8}}>
            <Text style={{fontFamily: 'sans-serif', fontSize: 18}}>
              {item.name}
            </Text>
            <Text>{item.desc}</Text>
          </View>
          <FontAwesomeIcon style={{marginEnd: 12}} icon={faChevronRight} />
        </TouchableOpacity>
      )}
    />
  );
};

export default Dashboard;
