import React from 'react';



function InputGroup(props) {
  return (
    <div className='input-group'>
      <input
        type='text'
        className='form-control'
        placeholder='enter task'
        onChange={e => props.changeInput(e.target.value)}
        value={props.inputText}
      />
      <div className='input-group-append'>
        <button
          className='btn btn-info'
          onClick={() => props.addTask()}
          disabled={!props.inputText}
        >add</button>
        <button
          className='btn btn-info'
          onClick={() => props.cleanTask()}
        >clean</button>
      </div>
    </div>

  );
}

export default InputGroup;