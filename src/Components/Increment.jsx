import { useState } from "react";

const Increment= () =>{
    const [count, setCount] = useState(0)
    const handleClick = ()=>{
        setCount(count + 1);

    }

    return <>
    <h2>{count}</h2>
    <button onClick={handleClick}>Click</button>

    </>

}

export default Increment
