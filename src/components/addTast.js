import React from "react";
import { useTask } from "../hooks/useTask";

import "./addTask.css";

function AddTask() {
  const { inputs, addTask, handleChange } = useTask();
  return (
    <div className="register-style">
      <h1 className="register-title">We are here to server you better! </h1>
      <div className="card-wrap">
        <h1>AddTask</h1>
        <form onSubmit={addTask} className="register-form">
          <label className="form-labels">
            Assigned
            <input
              className="gereral-div"
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
              className="gereral-div"
              type="price"
              placeholder="Enter amount"
              value={inputs.price}
              onChange={(e) => handleChange("price", e.target.value)}
            />
          </label>
          <label className="form-labels">
            Task
            <input
              className="gereral-div"
              type="text"
              placeholder="task"
              value={inputs.task}
              onChange={(e) => handleChange("task", e.target.value)}
            />
          </label>
          <label className="form-labels">
            Url
            <input
              className="gereral-div"
              type="url"
              placeholder="url"
              value={inputs.url}
              onChange={(e) => handleChange("url", e.target.value)}
            />
          </label>
          <label className="form-labels">
            Tag
            <input
              className="gereral-div"
              type="tag"
              placeholder="tag"
              value={inputs.tag}
              onChange={(e) => handleChange("tag", e.target.value)}
            />
          </label>
          <label className="form-labels">
            Delivery
            <input
              className="gereral-div"
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
              className=""
              value={inputs.status}
              onChange={(e) => handleChange("status", e.target.value)}
            >
              <option value="Verify">Verify</option>
              <option value="In Progress">In Progress</option>
              <option value="In Review">In Review</option>
              <option value="Waiting Approval">Waiting Approval</option>
            </select>
          </label>
          <button className="register-button" variant="primary" type="submit">
            AddTask
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
