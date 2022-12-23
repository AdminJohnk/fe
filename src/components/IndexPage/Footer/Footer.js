import React, { Component } from 'react'
import StyleTotal from './cssFooter'

export default class Footer extends Component {
    render() {
        return (
            <StyleTotal>
                <div className="footer">
                    <div className="footer_contact">
                        <div className="contact_Us">
                            <h3 className="h3_common">Contact Us</h3>
                            <div className="total">
                                <div className="address">
                                    <div className="title">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span className='ms-1'>Address: </span>
                                    </div>
                                    <div className="content">
                                        1234 Street Name, City Name, United States
                                    </div>
                                </div>
                                <div className="email">
                                    <div className="title">
                                        <i class="fa fa-envelope"></i>
                                        <span className='ms-1'>Email: </span>
                                    </div>
                                    <div className="content">
                                        support@eva.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about_EVA">
                            <h3 className="h3_common">
                                About EVA
                            </h3>
                            <div className="total">
                                <div>About Us</div>
                                <div>Blog</div>
                                <div>Terms & Conditions</div>
                                <div>Notation based on the Japan Act of Specified Commercial</div>
                                <div>Transactions</div>
                            </div>
                        </div>
                        <div className="customer_Service">
                            <h3 className="h3_common">
                                Customer service
                            </h3>
                            <div className="total">
                                <div>Help Center</div>
                                <div>Privacy Policy</div>
                                <div>Prohibited Items</div>
                                <div>FAQs</div>
                                <div>Inquiry</div>
                            </div>

                        </div>
                        <div className="payment_Shipping">
                            <h3 className="h3_common">
                                Payment & Shipping
                            </h3>
                            <div className="total">
                                <div>Usage Fees</div>
                                <div>About Plan</div>
                                <div>Payment Method</div>
                                <div>Domestic Shipping</div>
                                <div>Shipping Methods</div>
                                <div>International Shipping Fee</div>
                            </div>

                        </div>
                        <div className="usage_Guide">
                            <h3 className="h3_common">
                                Usage Guide
                            </h3>
                            <div className="total">
                                <div>How To Buy At Shopping</div>
                                <div>How To Place A Bid</div>
                                <div>Sniper Bid</div>
                                <div>About J-Points</div>
                                <div>About package storage</div>
                                <div>Shipping Procedure</div>
                            </div>

                        </div>
                    </div>
                    <div className="footer_payment">
                        <div className="connect">
                            <span className="me-4 text">
                                Connect with EVA
                            </span>
                            <div className="social">
                                <img src='image/index/Payment/facebook.png' alt='facebook' />
                                <img src='image/index/Payment/instagram.png' alt='facebook' />
                                <img src='image/index/Payment/youtube.png' alt='facebook' />
                            </div>
                        </div>
                        <div className="payment">
                            <img src='image/index/Payment/momo.png' alt='facebook' />
                        </div>
                    </div>
                    <div className="footer_line">

                    </div>
                </div>
            </StyleTotal>
        )
    }
}
