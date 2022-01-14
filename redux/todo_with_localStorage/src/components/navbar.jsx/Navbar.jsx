import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {logoutUser} from '../../features/login/actions'

export const Navbar=()=>{

    const {token}=useSelector((state)=>{
        return{
            token:state.login.token,
        }
    });
    const dispatch=useDispatch();

    const handleLogout=()=>{
        localStorage.removeItem('userToken')
        dispatch(logoutUser());
    }


    return <>
        <div>
            <Link to="/">Home</Link>
            <Link style={{margin:"6px"}} to="/add_todo">Add Todo</Link>
            {!token?<Link to="/login">Login</Link>:
                <span onClick={handleLogout}>Logout</span>
            }
        </div>
    </>
}