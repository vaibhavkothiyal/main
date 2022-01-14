import { useEffect, useState } from "react"
import { addTodoLoading, addTodoSuccess, addTodoError } from "../../features/todos/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Todo = () => {

    const [userData, setData] = useState(null);
    const url = "http://localhost:3004/list";
    const dispatch = useDispatch();

    const {loading,token,error}=useSelector((state)=>{
        return{
            loading:state.login.loading,
            token:state.login.token,
            error:state.login.error
        }
    })
    const navigate=useNavigate();

    useEffect(()=>{
        if(!token) navigate("/login")
    })

    const handleInp = (e) => {
        const { name, value } = e.target;
        setData({
            ...userData, [name]: value, status: "Incomplete", id: new Date().getTime().toString()
        });
    }

    const handleSubmit = () => {
        dispatch((addTodoLoading()))
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData),
        }).then(res => res.json())
            .then((res) => {
                dispatch((addTodoSuccess(res)))
            })
            .catch((err) => { dispatch((addTodoError(err))) })
    }

    return <>
        <input onChange={handleInp} type="text" name="title" placeholder="enter task" />
        <textarea onChange={handleInp} name="description" id="" cols="30" rows="5" placeholder="enter description"></textarea>
        <button onClick={handleSubmit}>Add Todo</button>
    </>
}