import React, { Component } from 'react'
import StyleTotal from './cssLoginForm'

export default class LoginForm extends Component {
    render() {
        return (
            <StyleTotal>
                <div>
                    <form className="signup-form">
                        <div className="form-group">
                            <label htmlFor="user-name">Username</label>
                            <input type="text" className="form-control" id="first-name" placeholder="Type your username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Type your password" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <div class="social-login">
                            Or sign up using
                            <br /> <br/>
                            <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="google"><i class="fab fa-google"></i></a>
                            <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                        </div>

                        <div class="sign-up">
                            Don't have an account yet?
                            <a href="#" class="sign-up-link ms-2">Sign up</a>
                        </div>
                    </form>
                </div>
            </StyleTotal>
        )
    }
}
