import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 2, backgroundColor: 'blue', width: '100%'}}>
        <Text style={styles.helloWorld}>1</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.helloWorld}>Hello World!!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloWorld: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
