import React, { Component } from 'react'
import StyleTotal from './cssProduct'


export default class Product extends Component {
  render() {
    return (
      <StyleTotal>
        <div className='Product'>
          <div className='ProductImage'>
            <div className='minImage'>
              <span className='up'>
                <i class="fa-solid fa-chevron-up"></i>
              </span>
              <span className='image'>
                <img className='img_ img-fluid' src='image/ProductPage/img1.jpg' alt='imageProduct' />
              </span>
              <span className='image'>
                <img className='img_ img-fluid' src='image/ProductPage/img2.jpg' alt='imageProduct' />
              </span>
              <span className='image'>
                <img className='img_ img-fluid' src='image/ProductPage/img3.jpg' alt='imageProduct' />
              </span>
              <span className='image'>
                <img className='img_ img-fluid' src='image/ProductPage/img5.jpg' alt='imageProduct' />
              </span>
              <span className='image'>
                <img className='img_ img-fluid' src='image/ProductPage/img6.jpg' alt='imageProduct' />
              </span>
              <span className='down'>
                <i class="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <div className='maxImage'>
              <img className='img_ img-fluid' src='image/ProductPage/img1.jpg' alt='imageProduct' />
              <div className='prev'>
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div className='next'>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className='ProductInfo'>
            <div className='name'>
              CASIO Retro Classic Unisex Digital Steel Bracelet Watch- A168WA-1YES Silver NEW
            </div>
            <hr />
            <div className='condition_Quantity'>
              <div className='Condition'>
                <span>Condition:</span>
                <span>New with tags</span>
              </div>
              <div className='Quantity'>
                <div className='left'>
                  <span>Quantity:</span>
                  <input type='number' name='quantity' min={0} defaultValue="0" />
                </div>
                <div className='right'>
                  <div>More than 10 available</div>
                  <div>
                    <span>286 sold</span>
                    <span>/</span>
                    <span>See feedback</span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className='price'>
              <div className='left'>
                <span className='priceText'>Price:</span>
                <div className='priceDetail'>
                  <div>19.99 $</div>
                  <div>Approximately</div>
                  <div>576.383.33 VND</div>
                </div>
              </div>
              <div className='right'>
                <div>Buy it Now</div>
                <div>Add to cart</div>
                <div>
                  <i class="fa-regular fa-heart me-2"></i>
                  Add to Watchlist</div>
              </div>
            </div>
            <hr className='mb-0' />
            <div className='sold'>
              <span className='soldNumber'>
                <div>286</div>
                <div>Sold</div>
              </span>
              <span className='Empty'></span>
              <span className='watcherNumber'>
                <div>383</div>
                <div>Watcher</div>
              </span>
            </div>
            <hr className='mt-0' />
            <div className='return'>
              <span className='ReturnText'>Return:</span>
              <span className='ReturnDetail'>30 day returns. Buyer pays for return shipping</span>
            </div>
            <div className='payment'>
              <span className='paymentText'>Payments:</span>
              <span className='paymentImage'>
                <img className='img_1 img-fluid' src='image/ProductPage/payment.png' alt='paymentImage' />
                <img className='img_2 img-fluid' src='image/ProductPage/momo.png' alt='paymentImage' />
              </span>
            </div>
          </div>
        </div>
      </StyleTotal>
    )
  }
}
