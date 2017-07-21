import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
        // Try setting `flexDirection` to `row`.
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('project', () => App);
