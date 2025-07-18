const Expression = () =>{
    const task = ()=>{
        const newTask = 8;

        if(newTask === 0){
            return "no task found.!!"
        }
        else{
            return `${newTask}`
        }


        // return newTask === 0 ? "No task found.!!" : `${newTask}`
    }
    return (
        <>
            <h2>task: {task()}</h2>
        </>
    )
}

export default Expression