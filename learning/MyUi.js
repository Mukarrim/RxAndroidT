import {
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles, styles1} from './Styles';

function mainUi(props) {
  //   console.log(something);
  //   let varTest = something;
  //   varTest = 'New thing'; really?
  props.something();

  // HOOKS!!!!!! -> hook it to something or a use case
  // useState -> remembers the state of value or reference
  // useEffect -> triggers every function calls - Kotlin-init() - or align it with variables n things
  // useRef -> used to hold a reference which can be used / abstraction?
  // useNavigation -> library to create custom navigations
  // useCallback ->  use to trigger a callback

  const [user, setUser] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('UseEffect');
  }, [user]);

  //   console.log(varTest);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
      <TouchableOpacity
        style={{
          flex: 3,
          backgroundColor: 'purple',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          console.log('Button PRessed for long±');
          setUser(`Hello ${count}`);
          setCount(count + 1);
          console.log(user);
        }}>
        <Text>{user}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default mainUi;

const funName = props => {
  console.log(props.something);
};

() => {};

// const immutable
// let mutable
