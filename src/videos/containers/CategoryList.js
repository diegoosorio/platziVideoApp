import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <Suggestion {...item} />;
  };
  render() {
    return (
      <FlatList
        horizontal
        keyExtractor={this.keyExtractor}
        data={this.props.list}
        ListEmptyComponent={this.renderEmpty}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default CategoryList;
