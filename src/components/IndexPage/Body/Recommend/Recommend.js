import React, { Component } from 'react'
import StyleTotal from './cssRecommend'

export default class Recommend extends Component {
    render() {
        return (
            <StyleTotal>
                <div className="recommend">
                    <div className="title">
                        Recommend for you
                    </div>
                    <div className="product">
                        <div className="active item">
                            <img src='image/index/Recommend/item1.png' alt='item' />
                            <div className="product_name">
                                Sneakers
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/Recommend/item2.png' alt='item' />
                            <div className="product_name">
                                Beauty
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/Recommend/item3.png' alt='item' />
                            <div className="product_name">
                                Watchs
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/Recommend/item4.png' alt='item' />
                            <div className="product_name">
                                Fishing
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/Recommend/item5.png' alt='item' />
                            <div className="product_name">
                                Smartphone
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/Recommend/item6.png' alt='item' />
                            <div className="product_name">
                                Collectibles
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/Recommend/item7.png' alt='item' />
                            <div className="product_name">
                                Electronics
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/Recommend/item8.png' alt='item' />
                            <div className="product_name">
                                Laptops
                            </div>
                        </div>
                    </div>
                </div>
            </StyleTotal>
        )
    }
}
