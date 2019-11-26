import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

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

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorld}>Hello World!!</Text>
    </View>
  );
};

export default App;
