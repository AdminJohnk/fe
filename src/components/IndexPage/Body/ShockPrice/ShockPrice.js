import React, { Component } from 'react'
import StyleTotal from './cssShockPrice'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const VND = (price) => {
    return price.toLocaleString('vi-VN', { maximumFractionDigits: 0 }) + ' VND';
}

const renderProduct = (data) => {
    let html = [];
    for (let i = 0; i < data.length; i++) {

        html.push(
            <div className="item" key={i}>
                <img src={data[i].image} alt='item1' />
                <div className="price">
                    {VND(Number(data[i].price)*23000)}
                </div>
                <div className="old_Price">
                    <span>{VND(Number(data[i].price - data[i].price * data[i].sale/100)*23000)}</span>
                    <span>{data[i].sale} % off</span>
                </div>
            </div>
        )
    }
    return html;
}


export default class ShockPrice extends Component {
    render() {
        const { data } = this.props;
        if (data.length === 0) {
            return;
        }
        return (
            <StyleTotal>
                <div className="shockPrice">
                    <div className="product">
                        <div className="text">
                            <span className="left">
                                <span>Shock Price Today</span>
                                <img src='image/index/lighting.svg' alt='lighting' />
                                <div className="hour">
                                    <span className="time">00</span> <span className="gap"> : </span>
                                    <span className="time">00</span> <span className="gap"> : </span>
                                    <span className="time">00</span>
                                </div>
                            </span>
                            <span className="right">See more</span>
                        </div>
                        <div className="productItem shockPrice__carousel mt-2">
                            <OwlCarousel
                                className="owl-theme"
                                loop
                                margin={10}
                                items={4}
                                autoplay={true}
                                dots={false}
                                responsiveClass={true}
                                responsive={{
                                    0: {
                                        items: 1,
                                    },
                                    900: {
                                        items: 3,
                                    },
                                    1000: {
                                        items: 4,
                                    }
                                }}

                            >
                                {renderProduct(data)}

                                {/* <div className="item">
                            <img src='image/index/PriceShock/item1.png' alt='item1' />
                            <div className="price">
                                853,414.63 VND
                            </div>
                            <div className="old_Price">
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>

                        </div>
                        <div className="item">
                            <img src='image/index/PriceShock/item2.png' alt='item1' />
                            <div className="price">
                                853,414.63 VND
                            </div>
                            <div className="old_Price">
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/PriceShock/item3.png' alt='item1' />
                            <div className="price">
                                853,414.63 VND
                            </div>
                            <div className="old_Price">
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/PriceShock/item4.png' alt='item1' />
                            <div className="price">
                                853,414.63 VND
                            </div>
                            <div className="old_Price">
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/PriceShock/item5.png' alt='item1' />
                            <div className="price">
                                853,414.63 VND
                            </div>
                            <div className="old_Price">
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/PriceShock/item6.png' alt='item1' />
                            <div className="price">
                                853,414.63 VND
                            </div>
                            <div className="old_Price">
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/PriceShock/item7.png' alt='item1' />
                            <div className="price">
                                853,414.63 VND
                            </div>
                            <div className="old_Price">
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/PriceShock/item8.png' alt='item1' />
                            <div className="price">
                                853,414.63 VND
                            </div>
                            <div className="old_Price">
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/PriceShock/item9.png' alt='item1' />
                            <div className="price">
                                853,414.63 VND
                            </div>
                            <div className="old_Price">
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className="item">
                            <img src='image/index/PriceShock/item10.png' alt='item1' />
                            <div className="price">
                                853,414.63 VND
                            </div>
                            <div className="old_Price">
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div> */}
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="pattern_product">
                        <img className='img-fluid' src='image/index/PriceShock/pattern.png' alt='pattern' />
                    </div>
                </div >
            </StyleTotal>
        )
    }
}
