import React, { Component } from 'react'
import StyleTotal from './cssProducts'

const VND = (price) => {
    return price.toLocaleString('vi-VN', { maximumFractionDigits: 0 }) + ' VND';
}


export default class Products extends Component {

    render_Products = (data) => {
        let html = [];
        for (let i = 0; i < data.length; i++) {
            let image = data[i].image;
            let name = data[i].name;
            name = name.length > 40 ? name.slice(0, 40) + '...' : name;
            let price = data[i].price;



            html.push(
                <div className="item">
                    <img src={image} alt='product' />
                    <div className="title">
                        {name}
                    </div>
                    <div className="star">
                        <span className="icon">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star "></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </span>
                        <span className="number">(4)
                        </span>
                    </div>
                    <div className="price">
                        {VND(price)}
                    </div>
                </div>
            )
        }
        return html;
    }

    render() {
        const { data } = this.props;
        if (data.length === 0) {
            return;
        }
        return (
            <StyleTotal>
                <div className="products">
                    {this.render_Products(data)}
                </div>
            </StyleTotal>
        )
    }
}
