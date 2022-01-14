import {LOGIN_LOADING, LOGIN_SUCCES, LOGIN_ERROR, LOGOUT_SUCCESS} from "./actionTypes"

export const loginLoading=()=>{
    return {
        type:LOGIN_LOADING
    }
}

export const loginSuccess=(token)=>{
    return {
        type:LOGIN_SUCCES,
        payload:token
    }
}

export const loginError=()=>{
    return {
        type:LOGIN_ERROR
    }
} 

export const logoutUser=()=>{
    return{
        type:LOGOUT_SUCCESS
    }
}