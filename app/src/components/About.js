import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class About extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigator.pop()} style={styles.welcome}>
          About page
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
    backgroundColor: '#222222',
  },
  welcome: {
    fontSize: 9,
    textAlign: 'center',
    margin: 20,
    color: 'red'
  }
});

export default About;
