import React, { Component } from 'react'

export default function ProductItem (props) {

    function getSrc(p){
        if (p.images[0] === undefined)
            return  "https://causeofaction.org/wp-content/uploads/2013/09/Not-available.gif";
        else 
            return p.images[0].src;
    }
    return (
      <div className="product-item">
        <h3>{props.p.title}</h3>
        <img
         height={100}
         title={props.p.title}
         src={getSrc(props.p)} 
        /> 
        <div>{props.p.product_type}</div>
        <div>Price : {props.p.variants[0].price}</div>
        <div> <button onClick={()=> props.addToCart(props.p)}> Add to cart</button> </div>

      </div>

    )}
