import { useState } from 'react'
import { TodoInput } from './todoInput'
import { TodoItems } from './todoItems'
import { nanoid } from "nanoid"

export const Todo = (input) => {
    const [list, setList] = useState([]);
    function ChkAns(data) {
        const payLoad = {
            title: data,
            status: false,
            id: nanoid(8)
        }
        setList([...list, payLoad])
    }

    function ChkStatus(id) {

        // const newList=list.filter(el => {
        //     return el.id !== id;
        // })
        setList(list.filter(el => {
            return el.id !== id;
        }));
        

    }

    return <>
        <TodoInput ChkAns={ChkAns} />
        {list.map((e) => (<TodoItems key={e.id} {...e} handleStatus={ChkStatus} />))}
    </>
}