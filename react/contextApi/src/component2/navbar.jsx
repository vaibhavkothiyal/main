import './navbar.css'
import { Login } from './login'
import { useState } from 'react'

import { useContext } from "react"
import { loginContext } from "../context/loginContext"

export const Navbar = () => {

    const {sts,SetLoginStatus}=useContext(loginContext);
    const [LoginBtn, setLoginBtn] = useState(false);
    const [tokn,setTokn]=useState("");
    const setLogin=()=>{
        setLoginBtn(false);
    }
    const handleTokn=(tokenIs)=>{
        setTokn(tokenIs);
    }
    return <>
        <div className="navbar">
            <div className='buttonContainer'>
                <button onClick={SetLoginStatus}>LogOut</button>
                {!sts?<button onClick={() => { setLoginBtn(true) }}>Login</button>:null}
                {sts?<span className='loginSts'>Logged in Successfully Token:{tokn}</span>:null}
            </div>
        </div>
        {LoginBtn ? <Login setLogin={setLogin} handleTokn={handleTokn}/> : null}
    </>
}