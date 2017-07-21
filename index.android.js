import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
     // Try setting `justifyContent` to `flex-end`.
     // Try setting `flexDirection` to `row`.
     <View style={{
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'flex-end',
       alignItems: 'flex-end',
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
