import { useRef, useState } from 'react'
import '../App.css'

export const Form=()=>{
    const ref=useRef(null);
    const [form,setForm]=useState({
        userName:"",
        age:"",
        address:""
    });

    const handleChange = function (e){
        const {name,value}=e.target;
        // const [name,value]=[e.target.name,e.target.value]
        console.log(ref.current.files)
        setForm({...form,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(form);
    }
    return <>
        <h1>User Info</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="userName" placeholder='Enter Name' />
            <input onChange={handleChange} type="number" name="age" placeholder='Enter age' />
            <input onChange={handleChange} type="text" name="address" placeholder='Enter address' />
            <input ref={ref} onChange={handleChange} type="file" />
            <input type="submit"/>
        </form>
    </>
}