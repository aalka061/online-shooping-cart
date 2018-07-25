import React, { Component } from 'react'
import products from '../../data/products.json'
import ProductList from '../containers/product_listing/ProductList'


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <ProductList products = {products.products}/>
      </div>
    )
  }
}
