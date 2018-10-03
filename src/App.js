import React, { Component } from 'react';
import uniqid from 'uniqid';
import './index.css';
import Header from './Header';
import List from './List';
import InputGroup from './InputGroup';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {title: 'first to do', done: true, id: uniqid()},
                {title: 'second to do', done: false, id: uniqid()}

            ],
            inputText: ''
        }
    }

    changeInput = value => this.setState({inputText: value});

    addTask = () => {
        this.setState({
            list: [...this.state.list,
                {id: uniqid(),
                    title: this.state.inputText,
                    done: false}],
            inputText: ''
        });
    };

    cleanTask = () => {
        this.setState({list:[]})
    };

    makeDone = id => {
        this.setState({
            list: this.state.list.map(e => e.id === id ? ({...e, done: ! e.done}) : e)
        })
    };

  render() {
      console.log (this.state);
    return (
        <div className='container'>
            <Header/>
            <InputGroup
            changeInput={this.changeInput}
            addTask={this.addTask}
            inputText={this.state.inputText}
            cleanTask={this.cleanTask}
            />
            <List
                list={this.state.list}
                makeDone={this.makeDone}
            />
        </div>
    );
  }
}

export default App;
