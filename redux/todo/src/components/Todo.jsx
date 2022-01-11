import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, removeTodo, deleteTodo, chageStatus } from "../actions/Index";
import './Todo.css'



export const Todo = () => {

    const [inputData, setData] = useState(null);
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();

    const handleUserInp = (e) => {
        const { name, value } = e.target;
        setData({ ...inputData, [name]: value ,status:"false"});
    }


    return <>
        <div className="main-div">
            <div className="child-div">
                <div className="addItems">
                    <h1 className="todo-Heading">Add your list here</h1>
                    <input placeholder="Title" name="title" type="text" onChange={handleUserInp} /> <br />
                    <textarea className="inp-desc" name="description" id="" cols="30" rows="4"  placeholder="Enter description" onChange={handleUserInp}></textarea>
                    <i className="fa fa-plus add-btn" onClick={() => (dispatch(addTodo(inputData)))}></i>
                </div>
                {!inputData?null:<div>
                    {list.map((elem) => {
                        return (
                            <div className="todoList-display-container">
                            <div className="todoDivContainer" key={elem.id}>
                                <div className="topDiv">
                                    <div className="titleDiv">
                                        <h2 className="title" style={ elem.status==="Completed" ? { color:'green', paddingTop: '50%'} : {color:"red"}} >{elem.title}</h2>
                                    </div>
                                    <div className="statusDiv">
                                    <h3 className="status">Status:{elem.status}</h3>
                                    </div>
                                    <div className="desp-Div">
                                        {elem.status==="Completed"?null:<button className="mark-compl-btn" onClick={() => (dispatch(chageStatus(elem.id)))}>Mark Complete</button>}
                                        <i className="fa fa-trash-alt add-btn" title="delete-items" onClick={() => (dispatch(deleteTodo(elem.id)))}></i>
                                    </div>
                                </div>
                                <h3 className="description">{elem.description}</h3>
                            </div>
                            </div>
                        )
                    })}
                </div>}

            </div>
        </div>
    </>
}