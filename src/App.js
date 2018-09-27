import React, { Component } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Header from './Header';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {title: 'first to do', done: true, id: uniqid()},
                {title: 'second to do', done: false, id: uniqid()}

            ]
        }
    }


  render() {
    return (
        <div>
            <Header/>
            <List list={this.state.list}/>
        </div>
    );
  }
}

export default App;
