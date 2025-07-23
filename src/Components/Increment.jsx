import { useState } from "react";

const Increment= () =>{
    {/* useState returns an array */}
    const [count, setCount] = useState(0)
    const handleClick = ()=>{
        setCount(count + 1);

    }

    const [input, setInput] = useState('')
  const inputHandler  = (event) =>{
    setInput(event.target.value)

  }

    return <>
    <h2>{count}</h2>
    <input type="text" onChange={inputHandler}></input>
    <button onClick={handleClick}>Click</button>
    <h3>{input}</h3>

    </>

}

export default Increment
