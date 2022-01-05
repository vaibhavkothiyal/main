import { useState } from "react";
import { LoginUser } from "./db";
import { useContext } from "react"
import { loginContext } from "../context/loginContext"
import './login.css'

export const Login=({setLogin,handleTokn})=>{
    const {sts,SetLoginStatus}=useContext(loginContext);
    const userLog=(tokenis)=>{
        handleTokn(tokenis)
        SetLoginStatus();
    }
    const [user,setUser]=useState({
        email:"",
        password:""
    });
    const handleLogin=()=>{
        LoginUser(user,userLog);
        setLogin();
    }
    const handleInp=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});
    }
    return <>
        <div className="form">
            <input onChange={handleInp} type="text" name="email" placeholder="Enter Email" />
            <input onChange={handleInp} type="password" name="password" placeholder="Enter Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    </>
}