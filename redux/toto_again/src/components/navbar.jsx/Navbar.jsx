import { Link } from "react-router-dom"

export const Navbar=()=>{
    return <>
        <div>
            <Link to="/">Home</Link>
            <Link style={{margin:"6px"}} to="/add_todo">Add Todo</Link>
        </div>
    </>
}