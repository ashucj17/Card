import React from "react";
import Expression from "./expression";

const List = () => {

  const style ={
    color:'yellow',
    
  }

  const isDisabled =false
  const tasks = ['CSS', 'JavaScript', 'React', 'TypeScript']
  return (
    <>
      <ul>
        {/* <li style={style}>JavaScript</li>
        <li style={style}>CSS</li>
        <li style={style}>React</li>
        <li style={style}>TypeScript</li> */}
        {
          tasks.map((task,index) => <li key={index}>{task}</li>)
        }
      </ul>
      <button className="click" disabled= {isDisabled}>Add New</button>
    </>
  );
};

export default List