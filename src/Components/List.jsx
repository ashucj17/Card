import React from "react";
import Expression from "./expression";

const List = () => {

  const isDisabled =false
  return (
    <>
      <ul>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>React</li>
        <li>TypeScript</li>
      </ul>
      <button className="click" disabled= {isDisabled}>Add New</button>
    </>
  );
};

export default List