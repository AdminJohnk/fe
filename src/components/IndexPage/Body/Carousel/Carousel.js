import React, { Component } from 'react'
import StyleTotal from './cssCarousel'

export default class Carousel extends Component {
    render() {
        return (
            <StyleTotal>
                <div className="casousel">
                    <div className="casousel_content">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img style={{ height: "270px" }} src="image/index/carousel1.png" className="d-block w-100" alt="Carousel1" />
                                </div>
                                <div className="carousel-item">
                                    <img style={{ height: "270px" }} src="image/index/carousel2.png" className="d-block w-100" alt="Carousel2" />
                                </div>
                                <div className="carousel-item">
                                    <img style={{ height: "270px" }} src="image/index/carousel3.png" className="d-block w-100" alt="Carousel3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev pre_button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next next_button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="casousel_information">
                        <div className="title">
                            Technology
                            <br />
                            without limits
                        </div>
                        <div className="content">
                            The electronics you are looking for are here
                        </div>
                        <button>Shop now <i className="fa fa-arrow-right ms-1"></i></button>
                    </div>
                </div>
            </StyleTotal>

        )
    }
}
