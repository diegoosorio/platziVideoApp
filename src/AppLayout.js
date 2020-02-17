import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import API from '../utils/api';
import Home from '../src/screens/containers/Home';
import Header from '../src/sections/components/Header';
import SuggestionList from '../src/videos/containers/SuggestionList';
import CategoryList from '../src/videos/containers/CategoryList';
import Player from '../src/player/containers/Player';

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      },
    });
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <Player />
        <Text>buscador</Text>
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}

export default connect(null)(AppLayout);
