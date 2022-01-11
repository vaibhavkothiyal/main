import thunk from "redux-thunk"

export const addTodo=(data)=>{
    return {
        type:"ADD-TODO",
        payload:{
            id:new Date().getTime().toString(),
            title:data.title,
            description:data.description,
            status:data.status
        }
    }
}

export const deleteTodo=(id)=>{
    return {
        type:"DELETE-TODO",
        id
    }
}

export const removeTodo=()=>{
    return {
        type:"REMOVE-TODO"
    }
}

export const chageStatus=(id)=>{
    console.log("yss in status")
    return{
        type:"TOGGLE-STATUS",
        id
    }
}