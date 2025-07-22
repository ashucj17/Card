const Increment= () =>{
    let task = 0;
    const handleClick = (e)=>{
        task++;
        console.log("button clicked.!!", task)

    }

    return <>
    <button onClick={handleClick}>Click</button>

    </>

}

export default Increment
