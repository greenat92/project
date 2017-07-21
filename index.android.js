import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
     <View style={{flex: 1, flexDirection: 'row'}}>
       <View style={{flex:1, backgroundColor: 'powderblue'}} />
       <View style={{flex:2, backgroundColor: 'skyblue'}} />
       <View style={{flex:3, backgroundColor: 'steelblue'}} />
     </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('project', () => App);
