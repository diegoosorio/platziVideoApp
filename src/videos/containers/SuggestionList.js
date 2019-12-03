import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';

class SuggestionList extends Component {
    render(){
        const list = [
            {
                title: 'diego',
                key: '1'
            },
            {
                title: 'alejandro',
                key: '2'
            }
        ];

        return( 
            <FlatList 
                data={list}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />  
        )
    }
}

export default SuggestionList;