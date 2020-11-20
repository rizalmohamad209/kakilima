
import {faBars, faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Biker from '../../assets/images/biker.svg'
import Keuangan from '../../assets/images/keuangan.svg'
import Logout from '../../assets/images/logout.svg'
import Toko from '../../assets/images/toko.svg'
import User from '../../assets/images/user.svg'
import logo from '../../assets/images/logo.png'
import '../css/Profile.css'
import './Index'

export class Rekening extends Component {
    toggleClass = () => {
        const oldClassName = document.getElementById('bars').className;
        const newClassName = oldClassName === '' ? 'pr-sidebar-expand' : ''
        document.getElementById('bars').className = newClassName
      }
    render() {
        
        return (
            
            <div>
                <div id="bars">
                <div className="pr-navbar">
          {/* nav left */}
          <ul className="pr-navbar-nav">
            <li className="pr-nav-item">
              <a href="..." className="pr-nav-link">
                <FontAwesomeIcon icon={faBars} onClick={this.toggleClass}/>
              </a>
            </li>
            <li className="pr-nav-item">
              <img src={logo} className="pr-logo logo-light" alt=""/>
            </li>
          </ul>
          {/* end nav left */}
          <ul className="pr-navbar-nav pr-nav-right">
            <li className="pr-nav-item pr-avt-wrapper">
              <div className="pr-avt pr-dropdown">
                <FontAwesomeIcon icon={faUser} alt="User image" className="dropdown-toggle" data-toggle="user-menu" />
                <ul id="user-menu" className="pr-dropdown-menu">
                  <li className="pr-dropdown-menu-item">
                    <a href="..." className="pr-dropdown-menu-link">
                      <div>
                       <FontAwesomeIcon icon={faUser}/>
                      </div>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li className="pr-dropdown-menu-item">
                    <a href="..." className="pr-dropdown-menu-link">
                      <div>
                        <i className="fas fa-cog" />
                      </div>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li className="pr-dropdown-menu-item">
                    <a href="..." className="pr-dropdown-menu-link">
                      <div>
                        <i className="fas fa-wallet" />
                      </div>
                      <span>E-wallet</span>
                    </a>
                  </li>
                  <li className="pr-dropdown-menu-item">
                    <a href="..." className="pr-dropdown-menu-link">
                      <div>
                        <i className="fas fa-sign-out-alt" />
                      </div>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/* end nav right */}
        </div>
        {/* end navbar */}
        {/* sidebar */}
        <div className="pr-sidebar">
          <ul className="pr-sidebar-nav">
            <li className="pr-sidebar-nav-item">
                <Link to={`/profile`} className="pr-sidebar-nav-link">
               
              
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={User} width="30px" height="30px" alt=""/>
              
                </div>
                <span>
                  Akun Saya
                </span>
              </Link>
            </li>
            <li className="pr-sidebar-nav-item">
                <Link  to={`/pedagang`} className="pr-sidebar-nav-link">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Toko} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Toko Saya
                </span>
                </Link>
            </li>
           
            <li className="pr-sidebar-nav-item">
                <Link to={`/akun`}className="pr-sidebar-nav-link ">
              
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Biker} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Driver Bike
                </span>
              </Link>
            </li>
            <li className="pr-sidebar-nav-item">
                <Link to={`/rekening`} className="pr-sidebar-nav-link active">
                <div>
                   <img style={{marginTop:'20px', marginLeft:'20px'}} src={Keuangan} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Rekening Saya
                </span>
              </Link>
            </li>
            <li className="pr-sidebar-nav-item">
                <Link to={`/`} className="pr-sidebar-nav-link">
             
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Logout} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
        {/* end sidebar */}
        {/* main content */}
        <div className="pr-wrapper">
          <div className="pr-row">
            <div className="pr-col-12 pr-col-m-12 pr-col-sm-12">
              <div className="pr-card">
                <div className="pr-card-header">
                  <h3>
                    Rekening Saya
                  </h3>						
                </div>
                <div className="pr-card-content ">
                  <legend>
                    <p style={{paddingBottom: '10px'}}>E-Wallet</p>
                    <p>No HP</p>
                    <b>086756465765</b>
                    <p>Nama Akun</p>
                    <b>Efendi Kisnoto</b>
                    <p>Saldo</p>
                    <b>Rp.1.000.000</b><br />
                    <a className="button"> Ubah E-wallet</a>
                  </legend>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
            </div>
        )
    }
}

export default Rekening
