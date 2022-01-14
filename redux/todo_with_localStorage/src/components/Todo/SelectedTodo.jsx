import './SelectedTodo.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateTodoLoading, updateTodoSuccess, updateTodoError, deleteTodoLoading, deleteTodoSuccess, deleteTodoError} from '../../features/todos/actions';
import { useNavigate } from 'react-router-dom';

export const SelectedTodo = () => {
    const { id } = useParams();
    const [selTodo, setSelTodo] = useState(null);
    const [currStatus, setCurrStatus] = useState(null);
    const dispatch=useDispatch();
    const url = `http://localhost:3004/list/${id}`;
    const navigate=useNavigate();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setSelTodo(res);
                setCurrStatus(res.status);
            })
            .catch(err => console.log(err))
    }, [currStatus]);

    const toogleStatus = () => {
        dispatch(updateTodoLoading());
        fetch(url, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                status: currStatus==="Completed"?"Incompleted":"Completed"
            })
        })
            .then((res) => res.json())
            .then(res => {
                setCurrStatus(res.status)
                fetch("http://localhost:3004/list")
                .then(res=>res.json())
                .then((res)=>dispatch(updateTodoSuccess(res)))
                .catch(err=>dispatch(updateTodoError(err)))
            })
            .catch(err => {
                dispatch(updateTodoError(err))
            })
    }

    const deleteTodo=()=>{
        dispatch(deleteTodoLoading());
        fetch(url,{
            method:"DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            fetch("http://localhost:3004/list")
                .then(res=>res.json())
                .then((res)=>{
                    dispatch(deleteTodoSuccess(res))
                    navigate("/")
                })
                .catch(err=>dispatch(deleteTodoError(err)))
        })
        .catch(err=>{
            dispatch(deleteTodoError(err));
        })
    }

    return <>
        {selTodo ?
            <div className='container'>
                <div>
                    <div className='title'>{selTodo.title}</div>
                    <div className='statuscls'><span>status:-</span ><span className='status-value'>{selTodo.status}</span></div>
                    <div className='toogle-status'>
                    <input onClick={toogleStatus} type="checkbox" id="switch"
                        className="checkbox" />
                    <label for="switch" className="toggle"></label>
                    </div>
                    <button onClick={deleteTodo}>Delete Todo</button>
                </div>
                <div>
                    <h5>{selTodo.description}</h5>
                </div>
                <div>
                    <button onClick={()=>{navigate(`/edit_todo/${id}`)}}>Edit</button>
                </div>
            </div> : null
        }
    </>
}