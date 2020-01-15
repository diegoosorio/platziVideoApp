import React, {Component} from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import API from './utils/api';
import CategoryList from './src/videos/containers/CategoryList';

// type Props = {};

export default class App extends Component {
  state = {
    suggestionList: [],
    categoryList: [],
  };

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    // console.log(categories);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
