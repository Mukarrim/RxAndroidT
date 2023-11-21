import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'lightgray',
            borderRadius: 8,
            marginHorizontal: 16,
            marginBottom: 8,
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
          <View style={{flex: 1, width: '80%', marginHorizontal: 8}}>
            <Text style={{fontFamily: 'sans-serif', fontSize: 18}}>
              {item.name}
            </Text>
            <Text>{item.desc}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default Dashboard;
