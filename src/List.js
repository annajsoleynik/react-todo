import React from 'react';
import './App.css';
import  ListItem from './ListItem';


function List(props) {
    return (
        props.list.map(item => <ListItem item={item}/> )
    );
}

export default List;