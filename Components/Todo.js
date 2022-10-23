import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { items, handleEdit, handleDelete } = this.props;
    return (
      <li
        key={items.id}
        className="list-group-items d-flex justify-content-between align-itemss-center"
      >
        <span className="mr-2">
          {items}
          {/* {items.title}
					{items.description} */}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={handleEdit(items.id, 'new value')}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={ handleDelete(items.id, 'delete value')}>
            Delete
          </button>
        </span>
      </li>
    );
  }
}