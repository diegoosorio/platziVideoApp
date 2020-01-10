import React, {Component} from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import API from './utils/api';

// type Props = {};

export default class App extends Component {
  state = {
    suggestionList: [],
  };

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    console.log(movies);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      suggestionList: movies,
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categorías</Text>
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
