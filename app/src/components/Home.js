import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Home extends Component {

  constructor() {
    super()

    this.navigate = this.navigate.bind(this)
  }

  navigate(name) {
    this.props.navigator.push({
      name
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.navigate('about') } style={styles.welcome}>
          Go to about page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    color: '#222222'
  }
});

export default Home;
