import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import API from './utils/api';

export default class App extends Component {
  async componentDidMount() {
    // const movies = await API.getSuggestion(10);
    // console.log(movies);
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>buscadores</Text>
        <Text>categorías</Text>
        <SuggestionList />
      </Home>
    );
  }
}
