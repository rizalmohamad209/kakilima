import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import './css/Register.css'
import Logo from '.././assets/images/logo.png'

export class Signup extends Component {
    render() {
        return (
            <div>
                <center>
                <div className="login-content">
        <form action="index.html">
          <img src={Logo} alt=""/>
          <h2 className="title">Welcome</h2>
          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user" />
            </div>
            <div className="div">
              <h5>Full Name</h5>
              <input type="text" className="input" />
            </div>
          </div>
          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user" />
            </div>
            <div className="div">
              <h5>Username</h5>
              <input type="text" className="input" />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i"> 
              <i className="fas fa-lock" />
            </div>
            <div className="div">
              <h5>Password</h5>
              <input type="password" className="input" />
            </div>
          </div>
          <Link to="/product">
          <input type="submit" className="btn" value="Login" />
          </Link>
          <p >Already a user? <Link to={`/signup`}><span style={{display:'inline'}}>Log In</span></Link></p>
        </form>
      </div>
      </center>
            </div>
        )
    }
}

export default Signup
