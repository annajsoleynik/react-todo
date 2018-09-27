import React, { Component } from 'react';
import uniqid from 'uniqid';
import './App.css';
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


  render() {
      console.log (this.state);
    return (
        <div>
            <Header/>
            <InputGroup
            changeInput={this.changeInput}
            addTask={this.addTask}
            inputText={this.state.inputText}
            />
            <List list={this.state.list}/>
        </div>
    );
  }
}

export default App;
