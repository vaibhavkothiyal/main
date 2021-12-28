import { useState } from "react";

export const GroceryInput = ({glist})=>{
    const [data,setData]=useState("");
    function enterdValue(e){
        setData(e.target.value);
    }
    function userInput(){
        glist(data);
    }
    return <>
        <input type="text" placeholder="Enter list" onChange={enterdValue}/>
        <button onClick={userInput}>Add List</button>
    </>
}