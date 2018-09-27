import React from 'react';
import './App.css';


function InputGroup(props) {
    return (
            <div>
               <input
               placeholder={'enter task'}
               onChange={e => props.changeInput(e.target.value)}
               value={props.inputText}
               />
                <button
                onClick={() => props.addTask()}
                disabled={!props.inputText}
                >add</button>
            </div>
    )
}

export default InputGroup;