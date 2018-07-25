import React, { Component } from 'react'
import ProudctListItem from './ProudctItem'
import ProudctItem from './ProudctItem'
import { connect } from 'react-redux';



function ProductList (props) {
    return <div className="product_listing">
          {
              props.products.map(product => {
                   return <ProudctItem
                    p = {product}
                    addToCart = {props.addToCart}
                    /> 
                }
            )
        }
        
      </div>
}

function mapStateToProps(store) {

    return {
        cart : store.cart
    }
}

function mapDispatchToProps(dispatch) {
    
    return {
        addToCart: (item) => {
            dispatch({type:'ADD_PRODUCT', payload: item})
        },
        removeFromCart: (item)=>{
            dispatch({type:'REMOVE_PRODUCT', payload: item})


        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

    
