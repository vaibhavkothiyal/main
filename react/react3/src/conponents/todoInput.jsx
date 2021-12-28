import { useState } from "react";

export const TodoInput=({ChkAns})=>{
    const [input,setInput]=useState("");
    function currentInp(e){
        setInput(e.target.value)
    }

    function printCurrent(){
        console.log(input)
        ChkAns(input);
    }

    return(
        <>
            <input type="text" placeholder="Enter task" onChange={currentInp}/>
            <button onClick={printCurrent}>Add Task</button>
        </>
    )
}