import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import Sidebar from "../sidebar/sidebar";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <button className="logo">
          <span className="drug"> Drug</span>
          <span className="stoc">Stoc</span>
        </button>
        <Link to="/addtask">
          <button className="add-task">Add a new task +</button>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
