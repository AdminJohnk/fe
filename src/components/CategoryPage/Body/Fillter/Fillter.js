import React, { Component } from 'react'
import StyleTotal from './cssFillter'



export default class Fillter extends Component {

    renderDropdown() {
        let html = [];
        for (let i = 0; i < 10; i++) {
            html.push(
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        button abc
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="a">Action</a></li>
                        <li><a className="dropdown-item" href="a">Another action</a></li>
                        <li><a className="dropdown-item" href="a">Something else here</a></li>
                    </ul>
                </div>
                );
        }
        return html;
    }


    render() {
        return (
            <StyleTotal>
                <div className='fillter'>
                    <div className='path'>
                        <span className='me-2'>tiki</span>
                        <span className='me-2'><i class="fa-solid fa-chevron-right"></i></span>
                        <span>Casio Watches</span>
                    </div>
                    <div className='minsize'>
                        <div className='categoryName'>
                            Casio Watches
                        </div>
                        <div className='ResultFillter1'>
                            <span>2,506 Results</span>

                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="a">Action</a></li>
                                    <li><a className="dropdown-item" href="a">Another action</a></li>
                                    <li><a className="dropdown-item" href="a">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <div className='filler2'>
                            {this.renderDropdown()}
                        </div>
                        <hr/>
                    </div>
                </div>
            </StyleTotal>
        )
    }
}
