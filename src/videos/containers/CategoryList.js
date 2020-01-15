import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Empty from '../components/Empty';
import Separator from '../../sections/components/HorizontalSeparator';
import Category from '../components/Category';
import Layout from '../components/CategoryListLayout';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <Category {...item} />;
  };
  render() {
    return (
      <Layout title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default CategoryList;
