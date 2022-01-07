import { useEffect, useState } from "react";
import './Products.css'
import {Link} from 'react-router-dom'

export const Products=()=>{
    const tableHeader=["product name","price","more"];
    const [tProducts,setProd]=useState("");

    useEffect(()=>{
        fetch ("http://localhost:8000/products")
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            setProd(res);
        })
    },[])


    return <>
    <h1>Products available</h1>
        <table>
            <thead>
                <tr>
                    {tableHeader.map((tcol)=>(
                        <th>{tcol}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tProducts?tProducts.map((data)=>(
                    <tr>
                        <td>{data.product_name}</td>
                        <td>{data.price}</td>
                        <td><Link to={`/product/${data.id}`}><button>show more</button></Link></td>
                    </tr>
                )):null}
            </tbody>
        </table>
    </>
}