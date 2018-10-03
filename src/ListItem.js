import React from 'react';


function ListItem(props) {
  return (
    <div className={[
      'list-group-item',
      props.item.done ? 'list-group-item-success' : 'list-group-item-danger'
    ].join(' ')}
    key={props.item.id}>
      <div className={'row'}>
        <div className={'col-11'}>{props.item.title}
        </div>
        <button
          className={'col-1'}
          onClick={() => props.makeDone(props.item.id)}
        >{props.item.done ? 'Undo' : 'Done'}</button>
      </div>
    </div>
  );

}













export default ListItem;