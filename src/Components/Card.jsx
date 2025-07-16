import React from "react";
import List from "./List";
import Copyright from "./Copyright";
import Defaulter from "./defaulter"
import '../App.css'

function Cards() {
  return (
    <>
      <div className="card">
        <h1>Daily Task</h1>
        <List />
        <Defaulter/>
        <Copyright />
      </div>
    </>
  );
}

export default Cards;
