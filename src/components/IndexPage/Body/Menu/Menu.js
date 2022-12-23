import React, { Component } from 'react'
import CategoryPage from '../../../CategoryPage/CategoryPage'
import { Link } from 'react-router-dom'
import StyleTotal from './cssMenu'



export default class Menu extends Component {
  render() {
    const abc = 123;
    return (
      <StyleTotal>
        <div className="menu container-fluid">
          <ul>
            <Link aria-current="page" to="/"><li className="active">Home</li></Link>
            <Link aria-current="page" to={`/category`} state={{ data: 'DigitalDevices' }}><li>Electronic</li></Link>
            <Link aria-current="page" to={`/category`} state={{ data: 'DigitalDevices' }}><li>Fashion</li></Link>
            <Link aria-current="page" to={`/category`} state={{ data: 'DigitalDevices' }}><li>Health & Beauty</li></Link>
            <Link aria-current="page" to={`/category`} state={{ data: 'DigitalDevices' }}><li>Sport</li></Link>
            <Link aria-current="page" to={`/category`} state={{ data: 'DigitalDevices' }}><li>Collectibles and Art</li></Link>
            <Link aria-current="page" to={`/category`} state={{ data: 'DigitalDevices' }}><li>Industrial equipment</li></Link>
            <Link aria-current="page" to={`/category`} state={{ data: 'DigitalDevices' }}><li>Motor</li></Link>
            <Link aria-current="page" to={`/category`} state={{ data: 'DigitalDevices' }}><li>Deals</li></Link>
            <Link aria-current="page" to={`/category`} state={{ data: 'DigitalDevices' }}><li>Sell</li></Link>
          </ul>
        </div>
      </StyleTotal>
    )
  }
}
