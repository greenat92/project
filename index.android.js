import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Counter extends Component {
      state = {count: 0}

      componentDidMount(){
        setInterval(() => {
          this.setState({count: this.state.count + 1})
        }, 1000)
      }
      render() {
        const {count} = this.state;
        const {color, size} = this.props;
        return (
          <Text style={{color, fontSize: size}}>
            {count}
          </Text>
        );
      }
};

export default class  AppCounter extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});
// skip this line if using Create React Native App
AppRegistry.registerComponent('project', () => AppCounter);
