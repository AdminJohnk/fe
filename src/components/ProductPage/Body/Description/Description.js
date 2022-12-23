import React, { Component } from 'react'
import StyleTotal from './cssDescription'

export default class Description extends Component {
    render() {
        return (
            <StyleTotal>
                <div>
                    <div class="product-description">
                        <h2>About this product</h2>
                        <div class="product-identifiers">
                            <h3>Product Identifiers</h3>
                            <table>
                                <tr>
                                    <td>Brand</td>
                                    <td>Casio</td>
                                </tr>
                                <tr>
                                    <td>Reference Number</td>
                                    <td>A168WA-1YES</td>
                                </tr>
                                <tr>
                                    <td>EAN</td>
                                    <td>4971850436713, 7427505140148</td>
                                </tr>
                                <tr>
                                    <td>UPC</td>
                                    <td>4971850436713, 0079767541255</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>Casio Vintage</td>
                                </tr>
                                <tr>
                                    <td>eBay Product ID (ePID)</td>
                                    <td>7031191515</td>
                                </tr>
                            </table>
                        </div>
                        <div class="product-key-features">
                            <h3>Product Key Features</h3>
                            <table>
                                <tr>
                                    <td>Strap Material</td>
                                    <td>Stainless Steel</td>
                                </tr>
                                <tr>
                                    <td>Indices</td>
                                    <td>24-Hour Dial, 12-Hour Dial</td>
                                </tr>
                                <tr>
                                    <td>Department</td>
                                    <td>Unisex Adult</td>
                                </tr>
                                <tr>
                                    <td>Caseback</td>
                                    <td>Solid</td>
                                </tr>
                                <tr>
                                    <td>Case Colour</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>Case Size</td>
                                    <td>36.3mm</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
            </StyleTotal>
        )
    }
}
