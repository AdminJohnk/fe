import React, { Component } from 'react'
import StyleTotal from './cssHeader'

export default class Header extends Component {
  render() {
    return (
      <StyleTotal>
        <div className="header container-fluid">
          <div className="top">
            <div className="logo">
              <img src='https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png' alt='Logo' />
            </div>
            <div className="search">
              <input type='text' placeholder='Link or name of product you want to search...' />
              <button>
                <img src='image/index/akariconssearch.svg' alt='user' />
                <span>Search</span>
              </button>
            </div>
            <div className="account_cart">
              <div className="account me-5">
                <div className="login">
                  <img className="profile-icon me-2" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt='Login' />
                  <div className="login_account">
                    <span className='text-white'>
                      Sign in / Sign out
                    </span>
                    <span className='text-white' style={{ fontSize: '14px', fontWeight: "400" }}>
                      Account
                    </span>
                  </div>
                </div>
              </div>
              <div className="cart">
                <div className="images_cart">
                  <img className='me-0' src='image/index/cart.png' alt='cart' />
                </div>
                <span>Cart</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <span>Laptop</span>
            <span>Television</span>
            <span>Motor</span>
            <span>Car</span>
            <span>Smartphone</span>
            <span>Shoes</span>
          </div>
        </div>
      </StyleTotal>
    )
  }
}
