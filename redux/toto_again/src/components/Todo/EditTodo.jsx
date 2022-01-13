import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const EditTodo = () => {
    const { id } = useParams();
    const url = `http://localhost:3004/list/${id}`;
    const [selTodo, setSelTodo] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setSelTodo(res);
            })
            .catch(err => console.log(err))
    }, []);

    return <>
        {selTodo ? <div>
            <h1>Edit your todo here</h1>
            <div>
                <h2>{selTodo.title}</h2>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10" value={selTodo.description}></textarea>
            </div>
            <button>Submit edit</button>
        </div> : null}
    </>
}