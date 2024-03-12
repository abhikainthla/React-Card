import React, { useState } from 'react';
import './Product.css';
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    const addItem = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        props.setTotalPrice(props.totalPrice * newQuantity);
    };

    const removeItem = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            props.setTotalPrice(props.totalPrice * newQuantity);
        }
    };
    
    const removeProduct = () =>{
        props.removeProduct();
    }
    return (
        <div className='main'>
            <div className='container'>
                <div>
                    <img src={props.imgSrc} alt="Product"></img>
                </div>
                <div>
                    <h3>{props.name}</h3>
                    <p>${props.price}</p>
                    <button onClick={removeProduct}>remove</button>
                </div>
            </div>
            <div>
                <div>
                    <div><button onClick={addItem}><TiArrowSortedUp style={{width:"30px", height:"30px"}} /></button></div>
                    <div><span id='quantity'>{quantity}</span></div>
                    <div><button onClick={removeItem}><TiArrowSortedDown style={{width:"30px", height:"30px"}} /></button></div>
                </div>
            </div>
        </div>
    );
}

export default Product;
