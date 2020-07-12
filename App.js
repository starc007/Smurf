//import liraries
import React, {Component} from 'react';
import RootStack from './Navigation/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './Navigation/MainStack';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}

export default App;
