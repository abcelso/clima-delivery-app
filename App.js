import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
