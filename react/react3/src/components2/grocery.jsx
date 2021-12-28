import { useState } from "react"
import { GroceryInput } from "./groceryInput"
import { GroceryList } from "./groceryList";
import { nanoid } from "nanoid";

export const Grocery = ()=>{
    var [list,setList]=useState([]);
    function GList(data){
        const listObj={
            item:data,
            id:nanoid(8),
            status:false
        }
        setList([...list,listObj]);
    }

    function UpdatedList(id){
        setList(list.filter(el=>{
            return el.id!==id
        }))
    }

    return <>
        <GroceryInput glist={GList}/>
        {list.map(e=>(<GroceryList key={e.id} {...e} update={UpdatedList}/>))}
    </>
}