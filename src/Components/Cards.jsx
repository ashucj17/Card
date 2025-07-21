import React from "react";
import List from "./List";
import Copyright from "./Copyright";
import Defaulter from "./defaulter"
import Head from "./Head";
import '../App.css'
import Expression from "./expression";
import Cases from "./Cases";

function Cards() {
  return (
    <>
    <div className="container">
      <div className="card">
      <Head />
        <h1 style={{color:'red', fontSize:"35px"}}>Daily Task</h1> {/* Inlince css in react unsing attributes */}
        <List />
        <Defaulter/>
        <Copyright />
      </div>
      <div className="card">
        <h1>Expressions</h1>
        <Expression/>
        <Cases/>
      </div>
      </div>
    </>
  );
}

export default Cards;
