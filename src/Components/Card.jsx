import React from "react";
import List from "./List";
import Copyright from "./Copyright";
import '../App.css'

function Cards() {
  return (
    <>
      <div className="card">
        <h1>Card Components</h1>
        <List />
        <Copyright />
      </div>
    </>
  );
}

export default Cards;
