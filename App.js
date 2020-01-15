import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import API from './utils/api';
import CategoryList from './src/videos/containers/CategoryList';
import Video from 'react-native-video';

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
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            height: 100,
          }}>
          <Video
            source={{
              uri:
                'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
            resizeMode="contain"
          />
        </View>
        <Text>buscador</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
