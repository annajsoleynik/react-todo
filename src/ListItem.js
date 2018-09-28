import React from 'react';
import './App.css';


function ListItem(props) {
    return (
        <div
            key={props.item.id}>{props.item.title}
        </div>
    );

}













export default ListItem;