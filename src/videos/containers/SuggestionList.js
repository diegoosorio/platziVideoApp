import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';

import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator'
import Suggestion from '../components/Suggestion';

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay sugerencias" />
    itemSeparator = () => <Separator />
    renderItem = ({item}) => {
        return (
          <Suggestion {...item}/>
        )
    }
    render(){
        const list = [
            {
                title: 'Avengers',
                key: '1'
            },
            {
                title: 'Pokemon',
                key: '2'
            }
        ];

        return( 
            <Layout
                title="Recomenando para ti"
            >
                <FlatList 
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />  
            </Layout>
        )
    }
}

export default SuggestionList;