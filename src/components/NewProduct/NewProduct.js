import React, { Component } from 'react'
import StyleTotal from './cssNewProduct'
import Headers from './Header/Header'


export default class NewProduct extends Component {
    render() {
        return (
            <StyleTotal>
                <Headers />
                <div className='newProduct mt-5'>
                    <h2 className='mb-5'>Information New Product</h2>
                    <div className='diplayFlex'>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Name of product</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                        <form className='forminput forminputNumber width20' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="numberOfAvailable">Number of available</label>
                                <input type="number" id="numberOfAvailable" name="numberOfAvailable" min={0} required />
                            </div>
                        </form>
                    </div>
                    <div className='diplayFlex'>
                        <form className='forminput forminputPrice width30' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="Price">Price</label>
                                <input type="text" id="price" name="price" required />
                            </div>
                        </form>
                        <form className='forminput forminputSaleprice width30' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="Saleprice">Sale price</label>
                                <input type="text" id="salePrice" name="salePrice" min={0} required />
                            </div>
                        </form>
                        <form className='forminput forminputBrand width30' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="Brand">Brand</label>
                                <input type="text" id="Brand" name="Brand" min={0} required />
                            </div>
                        </form>
                    </div>
                    <div className='diplayFlex'>
                        <div className='Dropdown width30'>
                            <label htmlFor="formDropdown">Condition</label>
                            <select className='formDropdown'>
                                <option value="#">New</option>
                                <option value="#">Very good</option>
                                <option value="#">Fixed</option>
                                <option value="#">Vintage</option>
                                <option value="#">Antique</option>
                                <option value="#">Old</option>
                            </select>
                        </div>
                        <form className='forminput forminputAuctionStartPrice width30' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="AuctionStartPrice">Auction Start Price</label>
                                <input type="text" id="AuctionStartPrice" name="AuctionStartPrice" required />
                            </div>
                        </form>
                        <form className='forminput forminputAuctionEndPrice width30' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="AuctionEndPrice">Auction End Price</label>
                                <input type="text" id="AuctionEndPrice" name="AuctionEndPrice" required />
                            </div>
                        </form>
                    </div>
                    <div className='diplayFlex'>
                        <form className='forminput formNowPrice width30' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nowPrice">Buy it now price</label>
                                <input type="text" id="nowPrice" name="nowPrice" required />
                            </div>
                        </form>
                        <form className='forminput forminputTime width30' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="Time">Time</label>
                                <input type="text" id="Time" name="Time" min={0} required placeholder='by minutes' />
                            </div>
                        </form>
                        <form className='forminput forminputStepPrice width30' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="StepPrice">Step Price</label>
                                <input type="text" id="StepPrice" name="StepPrice" min={0} required />
                            </div>
                        </form>
                    </div>
                    <div className='diplayFlex'>
                        <div className='Dropdown width30'>
                            <label htmlFor="formDropdown">Payment</label>
                            <select className='formDropdown'>
                                <option value="#">Momo</option>
                                <option value="#">Paypal</option>
                                <option value="#">Visa</option>
                                <option value="#">Mastercard</option>
                            </select>
                        </div>
                    </div>
                    <h4 className='mt-3'>Link Product</h4>
                    <div className='diplayFlex'>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Main image (Medium size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                    </div>
                    <div className='diplayFlex'>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 1 (big size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 1 (small size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                    </div>
                    <div className='diplayFlex'>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 2 (big size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 2 (small size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                    </div>
                    <div className='diplayFlex'>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 3 (big size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 3 (small size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                    </div>
                    <div className='diplayFlex'>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 4 (big size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 4 (small size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                    </div>
                    <div className='diplayFlex'>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 5 (big size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 5 (small size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                    </div>
                    <div className='diplayFlex'>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 6 (big size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                        <form className='forminput forminputName' action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="nameOfProduct">Sub image 6 (small size)</label>
                                <input type="text" id="nameOfProduct" name="nameOfProduct" required />
                            </div>
                        </form>
                    </div>
                    <h4 className='mt-3'>More Information</h4>
                    <div class="description_title">
                        <div className='textDescription'>Description</div>
                        <textarea name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button id="CreateButton" type="button" class="btn " onclick="CreateClick()">
                            Create new product
                        </button>
                    </div>

                </div>
            </StyleTotal>
        )
    }
}
