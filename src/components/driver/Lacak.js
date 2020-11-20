import React, { Component } from 'react'
import Nav from './Nav'
import Biker from '../../assets/images/biker.svg'
import Img2 from '../../assets/images/img2.jpg'
import Dashboard from '../../assets/images/dashboard.svg'
import Toko from '../../assets/images/toko.svg'
import Histori from '../../assets/images/history.svg'
import Tracking from '../../assets/images/tracking.svg'
import { Link } from 'react-router-dom'

export class Lacak extends Component {
    render() {
        return (
            <div>
                 <Nav/>
                <div id="bars">
          <div className="d-sidebar">
          <ul className="d-sidebar-nav">
            <li className="d-sidebar-nav-item">
              <Link to={`/akun`}className="d-sidebar-nav-link ">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Dashboard} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="d-sidebar-nav-item">
              <Link to="/target" className="d-sidebar-nav-link">
                <div >
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Biker} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Target
                </span>
              </Link>
            </li>
            <li className="d-sidebar-nav-item">
              <Link to={`/lelang`} className="d-sidebar-nav-link">
            
                <div >
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Toko} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Lelang
                </span>
              </Link>
            </li>
            <li className="d-sidebar-nav-item">
              <Link to={`/lacak`} className="d-sidebar-nav-link active">
              
                <div >
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Tracking} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Lacak
                </span>
              
              </Link>
            </li>
            <li className="d-sidebar-nav-item">
              <Link  to={`/historidriver`}className="d-sidebar-nav-link">
                <div >
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Histori} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Histori
                </span>

              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-wrapper">
        <div className="d-row">
          <div className="d-col-12 d-col-m-12 d-col-sm-12">
            <div className="d-card">
              <div className="d-card-header">
                <h3>
                  Lacak
                </h3>
                <i className="fas fa-redo-alt" />
              </div>
              <div className="d-card-content d-row">
                <img className="d-lelang-img" src={Img2} alt=""/>						
                <div>
                  <div style={{paddingBottom: '5px'}}>
                    <b>Somay Ayam Kampung</b>
                    <div style={{color: '#f0932b', paddingTop: '5px'}}>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="d-row ">
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6">
                      <div style={{borderRight: '1px solid #727475', paddingRight: '20px'}}>
                        <p>ID Lelang</p>
                        <b>LLG0004</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{borderRight: '1px solid #727475', paddingRight: '20px'}}>
                        <p>Alamat</p>
                        <b>Desa Karanganyar</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{borderRight: '1px solid #727475', paddingRight: '20px'}}>
                        <p>Tujuan</p>
                        <b>Desa Pagerbarang</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{paddingRight: '20px', borderRight: '1px solid #727475'}}>
                        <p>jarak</p>
                        <b>350 M</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{paddingRight: '20px'}}>
                        <p>Bid</p>
                        <b>Rp.8.000</b>
                      </div>
                    </div>
                  </div>
                  <div style={{paddingTop: '5px'}}>
                    <table>
                      <tbody><tr>
                          <td style={{width: '105px'}} valign="top">Pesanan</td>
                          <td><b>1 Bks Somay Ayam Kampung</b><br />
                            <b>2 Bks Somay Ikan</b>
                          </td>
                        </tr></tbody></table>
                  </div>
                  <div>
                    <iframe className="d-col-12 d-col-m-12 d-col-sm-12 d-col-xl-12" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3960.5940319837773!2d109.11510151427724!3d-6.9390255949865685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x2e6fb95a8059e98f%3A0x565ec952d40bb8fe!2sBatagor%20Somay%20Radja%20Biroe%20Abah%20Ali%2C%20Jalan%20Raya%20Penarukan%2C%20Jangri%2C%20Pagedangan%2C%20Tegal%2C%20Jawa%20Tengah!3m2!1d-6.9387164!2d109.11644199999999!4m5!1s0x2e6fb9382ed91dc9%3A0xb7e8e3846a197e6a!2sPagedangan%2C%20Tegal%2C%20Jawa%20Tengah!3m2!1d-6.938754599999999!2d109.1181429!5e0!3m2!1sid!2sid!4v1605109391384!5m2!1sid!2sid" style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} height={450} frameBorder={0} />
                  </div>
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

export default Lacak
