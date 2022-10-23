import React, { Component } from "react";

export default class TodoForm extends Component {


render() {
    const {title, description,item, onTitleChanged, onDescChanged, handelAdd } = this.props
    return (
      <div className="card card-body">
				<div className="container">
        <form action="">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={title}
              onChange={onTitleChanged}
            />
						<div className="mb-3">
							<label  className="form-label"> description</label>
							<textarea className="form-control"
							// id="exampleFormControlTextarea1"
							rows="3"
							placeholder="add todo description"
							value={description}
							onChange={onDescChanged}
							></textarea>
						</div>
						</div>
						<div className="d-grid gap-2 col-6  mx-auto">
								<button className="btn btn-primary mx-4"
								 onClick={handelAdd}
								type="button">Add</button>
								<button className="btn btn-primary mx-4" type="button">Reset</button>
						</div>
						</form>
						<div>
						<h4>
						<label for="exampleFormControlTextarea1" className="form-label"> Title:</label>
							{title}
							</h4>
						<h4>
						<label for="exampleFormControlTextarea1" className="form-label"> description:</label>
							{description}
							</h4>
						</div>
						<h4>{item}</h4>

          </div>
          </div>
		);
	}
}
