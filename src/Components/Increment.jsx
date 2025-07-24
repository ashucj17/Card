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

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
    const emailInput = (event)=>{
        const inputValue= event.target.value;
        if(inputValue === 'alphaone@gmail.com'){
            setEmail(inputValue)
            setMessage('Correct Email')
        }else if(inputValue === ''){
            setEmail('')
            setMessage('Enter Your Email')
        } else{
            setEmail(inputValue)
            setMessage('Wrong Email')
        }
    }

    const targets = ['4 modules of JS', '1 or 2 modules of React']

    return <>
    <h2>{count}</h2>
    <input type="text" onChange={inputHandler}></input>
    <button onClick={handleClick}>Click</button>
    <h3>{input}</h3>
    <input type="email" onChange={emailInput}></input>
    <h3>{email}</h3>
    <h3>{message}</h3>
    <ul>
    {targets.map((target, index)=> <li key={index}>{target}</li> )}
</ul>
    </>

}

export default Increment
