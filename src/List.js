import React from 'react';
import './App.css';


function List(props) {
    return (
        props.list.map(item => <div key={item.id}>{item.title}</div>)
    );
}

export default List;