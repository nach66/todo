import React, { Component } from "react";

export default class TodoItem extends Component {

  render() {
    const { title, done,  handleDelete, handleEdit, handleDone } = this.props;
    return (
        <li 
          className="text-capitalize d-flex justify-content-between my-1">
          <div className="item" onClick={handleDone}>
            {done? <i className="mx-2 far fa-check-square text-secondary" /> : 
              <i className="mx-2 far fa-square" />}
            <h6 className={done? "done" : ""}>{title}</h6>
          </div>
          <div className="icon-btn-container">
          <span className="mx-2 text-warning " onClick={handleEdit}>
              <i className="fas fa-pen icon-btn" />
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash icon-btn" />
            </span>
          </div>
        </li>
    );
  }
}
