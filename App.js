/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import Home from './src/screens'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
});
