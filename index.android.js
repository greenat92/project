import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View } from 'react-native';

export default class  AppPizzaTranslator extends Component {
  constructor(props){
    super(props);
    this.state = {text: ""};
  }
  render() {
    return (
     <View style={{padding: 10}}>
       <TextInput
         style={{height: 40}}
         placeholder='type something here'
         onChangeText={ (text) => this.setState({text}) }
       />
       <Text style={{padding: 10, fontSize: 42}}>
         {this.state.text.split(" ").map( (word) => word && '🍕').join(' ')}
       </Text>

     </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('project', () => AppPizzaTranslator);
