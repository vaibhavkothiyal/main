import { useEffect, useState } from 'react';
import '../App.css'
import { HandleData } from './data';
import { nanoid } from "nanoid";
import { TableData } from './table';

export const UserForm = () => {
    const url = "http://localhost:8000/users";
    const [data,getData]=useState({
        id:"",
        userName:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        gender:"",
        file:""
    });

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(udata=>{
            getData(udata)
        })
    },[]);

    const userInp=(e)=>{
        const {name,value}=e.target;
        getData({...data,[name]:value})
        console.log(e.target);
    }

    const updatedData=()=>{
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(udata=>{
            getData(udata)
        })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        getData({...data,id:nanoid(5)})
        HandleData(data,updatedData);
    }

    return <>
        <div className="userForm">
            <input onChange={userInp} type="text" name="userName" placeholder="enter name" />
            <input onChange={userInp} type="Number" name="age" placeholder="enter age" />
            <input onChange={userInp} type="text" name="address" placeholder="enter address" />
            <select name="department" onMouseUp={userInp} >
                <option value="" selected disabled hidden>select Department</option>
                <option value="IT">IT</option>
                <option value="CS">CS</option>
                <option value="Management">Management</option>
                <option value="Business">Business</option>
            </select>
            <input onChange={userInp} type="Number" name="salary" placeholder="enter salary" />
            <div className='FchildDiv'>
                <span>select gender:</span>
                <span>male</span><input onChange={userInp} type="radio" name="gender" value="male" />
                <span>female</span><input onChange={userInp} type="radio" name="gender" value="female" />
            </div>
            <input onChange={userInp} type="file" name="file" id="" />
            <input onClick={handleSubmit} type="submit"/>
            <TableData userData={data}/>
        </div>
    </>
}