import React, { Component } from 'react'
import StyleTotal from './cssProductList'

const VND = (price) => {
    return price.toLocaleString('vi-VN', { maximumFractionDigits: 0 }) + ' VND';
}

export default class ProductList extends Component {

    renderProductList(data) {
        let html = [];
        for (let i = 0; i < data.length; i++) {
            let image = data[i].image;
            let name = data[i].name;
            name = name.length > 50 ? name.slice(0, 50) + '...' : name;
            let price = data[i].price;
            let starNumber = data[i].rating;
            // <i className="fa fa-star" aria-hidden="true"></i>
            let start = [];
            for (let j = 0; j < starNumber; j++) {
                start.push(<i className="fa fa-star" aria-hidden="true" key={j}></i>);
            }
            html.push(
                <div className="card text-left" key={i}>
                    <img className="card-img-top img-fluid" src={image} alt="product" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className='star'>
                            {start}
                        </p>
                        <span>  {`(${starNumber})`}</span>
                        <p className="card-text">
                            <span className="price">{VND(price)}</span>
                            <span className="bid">5 bids</span>
                        </p>
                        <p className='time'>
                            46m 49s
                        </p>
                    </div>
                </div>
            );
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
                <div className='productList'>
                    {this.renderProductList(data)}
                </div>
            </StyleTotal>
        )
    }
}
