import React from 'react';


function ListItem(props) {
  return (
    <div
      className={[
        'list-group-item',
        props.item.done ? 'list-group-item-success' : 'list-group-item-danger'
      ].join(' ')}
      key={props.item.id}>{props.item.title}
    </div>
  );

}













export default ListItem;