import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/SuggestionListLayout';

class SuggestionList extends Component {
    render(){
        const list = [
            {
                title: 'Titulo1',
                key: '1'
            },
            {
                title: 'Titulo2',
                key: '2'
            }
        ];

        return( 
            <Layout
                title="Recomenando para ti"
            >
                <FlatList 
                    data={list}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                />  
            </Layout>
        )
    }
}

export default SuggestionList;