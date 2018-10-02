import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'

class App extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    fetch("https://crudapi.codelouisville.org/users/toreyheather/todos")
      .then(res => res.json())
      .then(
        (results) => {
          this.setState({
            todos: results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <TodoList todos={this.state.todos} />
    );
  }
}

export default App;