import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class TodoList extends Component {
  state = { show: false }

  handleclick = ()=> {
    const { clearList } = this.props;
    if (window.confirm('Did you really finish all the tasks..?'))  {
      toast.success("good for you!");
      clearList();
    }
  }

  render() {
    const { items, handleDelete, handleEdit, handleDone } = this.props;

    return (
      <ul className="list-group list-group-flush my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item._id}
              title={item.title}
              done={item.done}
              handleDelete={() => handleDelete(item._id)}
              handleEdit={() => handleEdit(item._id)}
              handleDone={() => handleDone(item._id)}
            />
          );
        })}

        <button
          className="mybtn btn-danger text-uppercase"
          onClick={this.handleclick} >
          clear list
        </button>
      
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={true}
        />      
      </ul>
    );
  }
}
