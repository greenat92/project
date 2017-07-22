import React, { Component } from 'react';
import { AppRegistry, Alert, Button, StyleSheet, View } from 'react-native';

export default class  ButtonBasics extends Component {

  _onPressButton(){
    Alert.alert("You taped the button!")
  }
  render() {
    return (
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                  <Button
                    onPress={this._onPressButton}
                    title="Click me"
                  />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Click me"
                  onPress={this._onPressButton}
                  color="#841584"
                />
              </View>
              <View style={styles.alternativeLayoutButtonContainer}>
                <Button
                  title="This looks great to me"
                  onPress={this._onPressButton}
                />
                <Button
                  title="ok to me"
                  onPress={this._onPressButton}
                  color="#841584"
                />
              </View>
            </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('project', () => ButtonBasics);

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center'
  },
  buttonContainer:{
    margin: 20
  },
  alternativeLayoutButtonContainer:{
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
