import React, { Component } from 'react'
import Product from './Product/Product'
import Description from './Description/Description'
import Visitshop from './Visitshop/Visitshop'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Product/>
        <Description/>
        <Visitshop/>
      </div>
    )
  }
}
