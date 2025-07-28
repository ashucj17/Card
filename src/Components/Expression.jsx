import Increment from "./Increment";

const Expression = () =>{
    const style ={
    color:'yellow'
    
  }
    const task = ()=>{
        let newTask = 4;

        if(newTask === 0){
            return "no task found.!!"
        }
        else{
            return `${newTask}`
        }


        // return newTask === 0 ? "No task found.!!" : `${newTask}` Ternary Operator
    }

    
    return (
        <>
        <hr style={{borderColor:'red', borderWidth:'1px'}}></hr>
            <p style={style}>Task: {task()}</p>
            <Increment userName="Ashish" emailAddress="ashu@gmail.com"/>
        </>
    )
}

export default Expression