import React, { Component } from 'react'
import {faBars, faConciergeBell, faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Logo from '../../assets/images/logo.png'
import './styles.css'
import './Index'


export class Nav extends Component {

    toggleClass = () => {
        const oldClassName = document.getElementById('bars').className;
        const newClassName = oldClassName === '' ? 'p-sidebar-expand' : ''
        document.getElementById('bars').className = newClassName
      }
    render() {
        return (
            
            <div>
                <div className="container">
         <div className="p-navbar">
          {/* nav left */}
          <ul className="p-navbar-nav">
            <li className="p-nav-item">
              <a className="p-nav-link">
                  <FontAwesomeIcon icon={faBars} onClick={this.toggleClass}/>
              </a>
              <img src={Logo} style={{width: '60px', height: '60px'}} alt="" />
            </li>
            <li className="p-nav-item">
            </li>
          </ul>
          {/* end nav left */}
          {/* end form */}
          {/* nav right */}
          <ul className="p-navbar-nav p-nav-right">
            <li className="p-nav-item p-dropdown">
              <a className="p-nav-link">
              <FontAwesomeIcon icon={faConciergeBell} className="p-dropdown-toggle" data-toggle="notification-menu" />
                <span className="p-navbar-badge">15</span>
              </a>
              <ul id="notification-menu" className="p-dropdown-menu notification-menu">
                <div className="p-dropdown-menu-header">
                  <span> Notifications </span>
                </div>
                <div className="p-dropdown-menu-content overlay-scrollbar scrollbar-hover">
                  <li className="p-dropdown-menu-item">
                    <a href="pengiriman.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-biking" />
                      </div>
                      <span>
                        Biker A bid lelangmu
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pesanan.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-tasks" />
                      </div>
                      <span>
                        Pesanan baru diterima
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pengiriman.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-biking" />
                      </div>
                      <span>
                        Biker B bidding lelangmu
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pesanan.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-tasks" />
                      </div>
                      <span>
                        Pesanan baru diterima
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pengiriman.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-biking" />
                      </div>
                      <span>
                        Biker c bidding lelangmu
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pesanan.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-tasks" />
                      </div>
                      <span>
                        Pesanan baru diterima
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pengiriman.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-biking" />
                      </div>
                      <span>
                        Biker c bidding lelangmu
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pesanan.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-tasks" />
                      </div>
                      <span>
                        Pesanan baru diterima
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pengiriman.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-biking" />
                      </div>
                      <span>
                        Biker f bidding lelangmu
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pesanan.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-tasks" />
                      </div>
                      <span>
                        Pesanan baru diterima
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pengiriman.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-biking" />
                      </div>
                      <span>
                        Biker g bidding lelangmu
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="pesanan.html" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-tasks" />
                      </div>
                      <span>
                        Pesanan baru diterima
                        <br />
                        <span>
                          15/07/2020
                        </span>
                      </span>
                    </a>
                  </li>
                </div>
                <div className="p-dropdown-menu-footer">
                  <span> View all notifications </span>
                </div>
              </ul>
            </li>
            <li className="p-nav-item avt-wrapper">
              <div className="avt p-dropdown">
               <FontAwesomeIcon icon={faUser} alt="User image" style={{marginTop:'10px'}} className="p-dropdown-toggle" data-toggle="user-menu" />
                <ul id="user-menu" className="p-dropdown-menu">
                  <li className="p-dropdown-menu-item">
                    <a className="p-dropdown-menu-link">
                      <div>
                       <FontAwesomeIcon icon={faUser}/>
                      </div>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="#" className="p-dropdown-menu-link">
                      <div>
                        <i className="fas fa-cog" />
                      </div>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="#" className="p-dropdown-menu-link">
                      <div>
                        <i className="far fa-credit-card" />
                      </div>
                      <span>Payments</span>
                    </a>
                  </li>
                  <li className="p-dropdown-menu-item">
                    <a href="#" className="p-dropdown-menu-link">
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
        </div>
        {/* end navbar */}
        
        </div>
        )
    }
}

export default Nav
