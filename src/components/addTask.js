import React from "react";
import { useTask } from "../hooks/useTask";

import "./addTask.css";

function AddTask() {
  const { inputs, addTask, handleChange } = useTask();
  return (
    <div className="add-style">
      <div className="cards-hold">
        <h1>Create New Task</h1>
        <br /> <br />
        <form onSubmit={addTask} className="add-form">
          <label className="form-labels">
            Assigned
            <input
              className="add-input"
              type="text"
              name="username"
              placeholder="Enter Username"
              value={inputs.username}
              onChange={(e) => handleChange("username", e.target.value)}
            />
          </label>
          <label className="form-labels">
            Price
            <input
              className="add-input"
              type="price"
              placeholder="Enter amount"
              value={inputs.price}
              onChange={(e) => handleChange("price", e.target.value)}
            />
          </label>
          <label className="form-labels">
            Task
            <input
              className="add-input"
              type="text"
              placeholder="task"
              value={inputs.task}
              onChange={(e) => handleChange("task", e.target.value)}
            />
          </label>
          <label className="form-labels">
            Url
            <input
              className="add-input"
              type="url"
              placeholder="url"
              value={inputs.url}
              onChange={(e) => handleChange("url", e.target.value)}
            />
          </label>
          <label className="form-labels">
            Tag
            <input
              className="add-input"
              type="tag"
              placeholder="tag"
              value={inputs.tag}
              onChange={(e) => handleChange("tag", e.target.value)}
            />
          </label>
          <label className="form-labels">
            Delivery
            <input
              className="add-input add-input2"
              type="date"
              placeholder="delivery"
              value={inputs.delivery_at}
              onChange={(e) => handleChange("delivery_at", e.target.value)}
            />
          </label>
          <label className="form-labels">
            Status
            <select
              name="status"
              className="add-input"
              value={inputs.status}
              onChange={(e) => handleChange("status", e.target.value)}
            >
              <option value="Waiting Approval">Waiting Approval</option>
              <option value="In Progress">In Progress</option>
              <option value="In Review">In Review</option>
              <option value="Verify">Verify</option>
              
            </select>
          </label>
          <button className="add-button" variant="primary" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
