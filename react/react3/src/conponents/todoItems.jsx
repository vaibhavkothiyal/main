export const TodoItems=({title,status,id,handleStatus})=>{
    return <>
        <li>{title} {status ? "done":"nt done"}</li>
        <button onClick={()=>{handleStatus(id)}}>Mark Complete</button>   
    </>
}