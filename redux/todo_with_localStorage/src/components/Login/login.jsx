import { useEffect, useState } from "react"
import { loginLoading, loginSuccess, loginError } from "../../features/login/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [userInp, setUserInp] = useState({
        email: "",
        password: ""
    });
    const url = "https://reqres.in/api/login";
    const dispatch = useDispatch();
    const { loading, token, error } = useSelector((state) => {
        return {
            loading: state.login.loading,
            token: state.login.token,
            error: state.login.error
        }
    })
    const navigate = useNavigate();

    useEffect(()=>{
        if(token) navigate("/")
    },[token]);

    const handleInp = (e) => {
        const { name, value } = e.target;
        setUserInp({ ...userInp, [name]: value })
    }

    const handleSubmit = () => {
        dispatch(loginLoading());
        fetch(url, {
            method: "POST",
            body: JSON.stringify(userInp),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => dispatch(loginSuccess(res)))
            .catch(err => dispatch(loginError()));
    }

    return <>
        <h1>Enter Login Details</h1>
        <input onChange={handleInp} type="text" name="email" placeholder="enter your email" />
        <input onChange={handleInp} type="password" name="password" placeholder="enter password" />
        <button onClick={handleSubmit}>Login</button>
    </>
}