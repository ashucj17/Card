const Cases = () =>{
    const num = 30
    const evenOdd = ()=>{
        if(num%2 === 0){
            return `It's an even number: ${num}`
        }
        else if(num === 0){
            return "Number is 0"
        }
        else{
            return `Number is odd: ${num}`
        }
    }
    return <>
        <p>{evenOdd()}</p>
    </>
}

export default Cases