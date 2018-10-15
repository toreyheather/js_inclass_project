import React, { Component } from 'react';
import PropTypes from "prop-types"
import TodoItem from "./TodoItem"
import {Link} from "react-router-dom"

class TodoList extends Component {
  render() {
    return (
      <div><Link to ="/new">Create New Todo </Link>
      <ul>
        {this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo}></TodoItem>)}
      </ul>  
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.array.isRequired
}

export default TodoList;
