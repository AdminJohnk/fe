import React, { Component } from 'react'
import Carousel from './Carousel/Carousel'
import FeaturedCategory from './FeaturedCategory/FeaturedCategory'
import Menu from './Menu/Menu'
import Products from './Products/Products'
import Recommend from './Recommend/Recommend'
import ShockPrice from './ShockPrice/ShockPrice'
import StyleTotal from './cssBody'

export default class Body extends Component {
  render() {

    const { data } = this.props;
    
    return (
      <StyleTotal>
        <div className="body_Home">
          <Menu />
          <Carousel />
          <ShockPrice data={data} />
          <FeaturedCategory />
          <Recommend />
          <Products data={data} />
        </div>
      </StyleTotal>
    )
  }
}
