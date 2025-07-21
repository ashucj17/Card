import React from "react";
import Expression from "./expression";

const List = () => {

  const style ={
    color:'yellow',
    
  }

  const isDisabled =false
  return (
    <>
      <ul>
        <li style={style}>JavaScript</li>
        <li style={style}>CSS</li>
        <li style={style}>React</li>
        <li style={style}>TypeScript</li>
      </ul>
      <button className="click" disabled= {isDisabled}>Add New</button>
    </>
  );
};

export default List