import React, { Component } from 'react'
import Fillter from './Fillter/Fillter'
import ProductList from './ProductList/ProductList'


export default class Body extends Component {
  render() {
    const {data} = this.props;
    console.log(data);
    return (
      <div>
        <Fillter/>
        <ProductList data={data}/>
      </div>
    )
  }
}
