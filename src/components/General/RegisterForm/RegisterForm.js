import React, { Component } from 'react'
import StyleTotal from './cssRegisterForm'

export default class RegisterForm extends Component {
    render() {
        return (
            <StyleTotal>
                <div>
                    <form className="signup-form">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" className="form-control" id="first-name" placeholder="Enter first name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" className="form-control" id="last-name" placeholder="Enter last name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-confirm">Confirm Password</label>
                            <input type="password" className="form-control" id="password-confirm" placeholder="Confirm password" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Create account</button>
                    </form>


                </div>
            </StyleTotal>
        )
    }
}
