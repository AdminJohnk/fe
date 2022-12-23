import React, { Component } from 'react'
import StyleTotal from './cssVisitshop'

export default class Visitshop extends Component {
    render() {
        return (
            <StyleTotal>
                <div class="shop-info">
                    <div class="details">
                        <h2 class="shop-name">Day Dream Shop UK</h2>
                        <div class="feedback">
                            <span class="rating me-2">99.6%</span>
                            <span class="label">Positive Feedback</span>
                        </div>
                        <div class="items-sold">
                            <span class="count">2.1K</span>
                            <span class="label">Items sold</span>
                        </div>
                    </div>
                    <div class="actions">
                        <button>Visit store</button>
                        <button>Contact</button>
                    </div>
                </div>

            </StyleTotal>
        )
    }
}
