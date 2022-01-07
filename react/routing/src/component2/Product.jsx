import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import './Product.css'

export const Product=()=>{
    const {id}=useParams();

    const [product,setProd]=useState("");

    useEffect(()=>{
        fetch (`http://localhost:8000/products/${id}`)
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            setProd(res);
        })
    },[])

    return <>
    <h1>Product details</h1>
        {product?
            <div className="SelProduct">
                <p>Product name:-> {product.product_name}</p>
                <img src={product.image} alt="no connection" />
                <p>Price:-> {product.price}Rups</p>
            </div>
        :null}
    </>
}