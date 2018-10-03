import React from 'react';
import  ListItem from './ListItem';


function List(props) {
  return (
    <div className='list-group'>
      {props.list.map(item => <ListItem item={item}/> )}
    </div>
  );
}

export default List;