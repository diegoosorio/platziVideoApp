import React, {Component} from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import API from './utils/api';
import CategoryList from './src/videos/containers/CategoryList';
import Player from './src/player/containers/Player';
import {Provider} from 'react-redux';
import store from './store';

// type Props = {};

export default class App extends Component {
  state = {
    // suggestionList: [],
    // categoryList: [],
  };

  async componentDidMount() {
    const categoryList = await API.getMovies();
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      },
    });
    const suggestionList = await API.getSuggestion(10);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Player />
          <Text>buscador</Text>
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    );
  }
}
