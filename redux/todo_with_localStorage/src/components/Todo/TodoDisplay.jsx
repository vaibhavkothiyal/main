import './TodoDisplay.css'
import { useSelector, useDispatch } from 'react-redux';
import { getTodoLoading, getTodoSuccess, getTodoError } from '../../features/todos/actions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const TodoDisplay = () => {

    const url = "http://localhost:3004/list";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, list, error } = useSelector((state) => {
        return {
            loading: state.todo.loading,
            list: state.todo.list,
            error: state.todo.error
        }
    });

    const {token}=useSelector((state)=>{
        return{
            token:state.login.token,
        }
    })

    useEffect(() => {
        dispatch(getTodoLoading());
        fetch(url)
            .then(res => res.json())
            .then(res => { dispatch(getTodoSuccess(res)) })
            .catch(err => dispatch(getTodoError(err)));
    }, [])

    return <>
        {token ? <div>
            {!list ? <h1>No active task</h1> :
                <div>
                    <h1>List of tasks</h1>
                    {list.map((elem) => {
                        return (
                            <div className="todoList-display-container" key={elem.id}>
                                <div onClick={() => { navigate(`/todo/${elem.id}`) }} className="todoDivContainer">
                                    <div className="topDiv">
                                        <div className="titleDiv">
                                            <h2 className="title" style={elem.status === "Completed" ? { color: 'green', paddingTop: '50%' } : { color: "red" }} >{elem.title}</h2>
                                        </div>
                                        <div className="statusDiv">
                                            <h3 className="status">Status:{elem.status}</h3>
                                        </div>
                                        <div className="desp-Div">
                                            <i className="fa fa-trash-alt add-btn" title="delete-items" ></i>
                                        </div>
                                    </div>
                                    <h3 className="description">{elem.description}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div> : <h1>login first</h1> }
    </>
}