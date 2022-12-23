import React, { Component } from 'react'
import Header from '../General/Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import axios from 'axios';

const getData = async () => {
    try {
        const list_product = await axios({
            method: 'get',
            url: 'https://ecommerce-api.herokuapp.com/products',
        })
        return list_product.data;
    } catch (error) {
        console.log(error);
    }
}

export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        getData().then((data) => {
            this.setState({ data });
        });
    }
    
    render() {
        return (
            <div>
                <Header />
                <Body data={this.state.data}/>
                <Footer />
            </div>
        )
    }
}
