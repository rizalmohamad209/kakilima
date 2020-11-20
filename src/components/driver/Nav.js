import React, { Component } from 'react'
import {faBars, faConciergeBell, faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Logo from '../../assets/images/logo.png'
import './Akun.css'
import './Driver.js'


export class Nav extends Component {

    toggleClass = () => {
        const oldClassName = document.getElementById('bars').className;
        const newClassName = oldClassName === '' ? 'd-sidebar-expand' : ''
        document.getElementById('bars').className = newClassName
      }
    render() {
        return (
            
            <div>
        <div className="d-navbar">
          {/* nav left */}
          <ul className="d-navbar-nav">
            <li className="d-nav-item">
            <a href="#" className="d-nav-link">
                    <FontAwesomeIcon icon={faBars} onClick={this.toggleClass}/>
            </a>
            </li>
            <li className="d-nav-item">
              <img src={Logo} className="d-logo logo-light" alt=""/>
            </li>
          </ul>
          {/* end nav left */}
          <ul className="d-navbar-nav d-nav-right">
        <li className="d-nav-item d-dropdown">
          <a href className="d-nav-link">
            <FontAwesomeIcon icon={faConciergeBell} data-toggle="notification-menu" />
            <span className="d-navbar-badge">15</span>
          </a>
          <ul id="notification-menu" className="d-dropdown-menu d-notification-menu">
            <div className="d-dropdown-menu-header">
              <span>
                Notifications
              </span>
            </div>
            <div className="d-dropdown-menu-content d-overlay-scrollbar d-scrollbar-hover">
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
                  <div>
                    <i style={{color: '#6ab04c'}} className="fas fa-check-square" />
                  </div>
                  <span>
                    Bid dengan ID lelang LLG001 anda diterima
                    <br />
                    <span>
                      15/07/2020
                    </span>
                  </span>
                </a>
              </li>
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
                  <div>
                    <i style={{color: '#eb4d4b'}} className="fas fa-window-close" />
                  </div>
                  <span>
                    Bid dengan ID lelang LLG002 anda tidak diterima
                    <br />
                    <span>
                      15/07/2020
                    </span>
                  </span>
                </a>
              </li>
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
                  <div>
                    <i style={{color: '#6ab04c'}} className="fas fa-biking" />
                  </div>
                  <span>
                    Selamat anda mencapai target hari ini
                    <br />
                    <span>
                      16/07/2020
                    </span>
                  </span>
                </a>
              </li>
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
                  <div>
                    <i style={{color: '#f0932b'}} className="fas fa-store" />
                  </div>
                  <span>
                    Ada lelang terbaru di sekitar Anda
                    <br />
                    <span>
                      16/07/2020
                    </span>
                  </span>
                </a>
              </li>
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
                  <div>
                    <i style={{color: '#eb4d4b'}} className="fas fa-biking" />
                  </div>
                  <span>
                    Maaf anda tidak mencapai target hari ini
                    <br />
                    <span>
                      16/07/2020
                    </span>
                  </span>
                </a>
              </li>
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
                  <div>
                    <i style={{color: '#6ab04c'}} className="fas fa-check-square" />
                  </div>
                  <span>
                    Bid dengan ID lelang LLG003 anda diterima
                    <br />
                    <span>
                      17/07/2020
                    </span>
                  </span>
                </a>
              </li>
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
                  <div>
                    <i style={{color: '#f0932b'}} className="fas fa-store" />
                  </div>
                  <span>
                    Ada lelang terbaru di sekitar Anda
                    <br />
                    <span>
                      16/07/2020
                    </span>
                  </span>
                </a>
              </li>
            </div>
            <div className="d-dropdown-menu-footer">
              <span>
                Lihat Slengkanya
              </span>
            </div>
          </ul>
        </li>
        <li className="d-nav-item d-avt-wrapper">
          <div className="d-avt d-dropdown">
                    <FontAwesomeIcon icon={faUser} style={{marginTop:'10px'}} className="dropdown-toggle" data-toggle="user-menu" />
            <ul id="user-menu" className="d-dropdown-menu">
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
                  <div>
                    <FontAwesomeIcon icon={faUser}/>
                  </div>
                  <span>Profile</span>
                </a>
              </li>
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
                  <div>
                    <i className="fas fa-cog" />
                  </div>
                  <span>Settings</span>
                </a>
              </li>
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
                  <div>
                    <i className="fas fa-wallet" />
                  </div>
                  <span>E-wallet</span>
                </a>
              </li>
              <li className="d-dropdown-menu-item">
                <a href className="d-dropdown-menu-link">
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
        </div>
       
      </div>
        )
    }
}

export default Nav
