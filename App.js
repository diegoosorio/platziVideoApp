import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import Home from './src/screens/containers/Home';

export default class App extends Component {
  render() {
    return (
      <Home>
        <Text>header</Text>
        <Text>buscador</Text>
        <Text>categorías</Text>
        <Text>sugerencias</Text>
      </Home>
    );
  }
}

