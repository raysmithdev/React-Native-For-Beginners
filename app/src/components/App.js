import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';
import Home from './Home'
import About from './About'

class App extends Component {

  constructor() {
    super()

    this.renderScene = this.renderScene.bind(this)
    this.configureScene = this.configureScene.bind(this)
  }

  renderScene(route, navigator) {
    console.log('Route:', route)

    if(route.name === 'home') {
      return <Home navigator={navigator} />
    } else if(route.name === 'about') {
      return <About navigator={navigator} />
    }
  }

  configureScene(route, navigator) {
     if(route.name === 'about') {
      return Navigator.SceneConfigs.HorizontalSwipeJump
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'home' }}
        renderScene={(route, navigator) => this.renderScene(route, navigator)}
        configureScene={this.configureScene}
      />
    );
  }
}

export default App;
