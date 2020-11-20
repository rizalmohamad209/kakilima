import React, { Component } from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'
import './Akun.css'
import Biker from '../../assets/images/biker.svg'
import Dashboard from '../../assets/images/dashboard.svg'
import Toko from '../../assets/images/toko.svg'
import Histori from '../../assets/images/history.svg'
import Tracking from '../../assets/images/tracking.svg'

export class Target extends Component {
    render() {
        return (
      <div>
        <Nav/>
        <div id="bars">
          <div className="d-sidebar">
          <ul className="d-sidebar-nav">
            <li className="d-sidebar-nav-item">
              <Link to={`/akun`} className="d-sidebar-nav-link">
              
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Dashboard} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Dashboard
                </span>
             
              </Link>
            </li>
            <li className="d-sidebar-nav-item active">
              <Link to="/target" className="d-sidebar-nav-link active">
                <div >
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Biker} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Target
                </span>
              </Link>
            </li>
            <li className="d-sidebar-nav-item">
              <Link  to={`/lelang`}className="d-sidebar-nav-link">
              
                <div >
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Toko} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Lelang
                </span>
              
              </Link>
            </li>
            <li className="d-sidebar-nav-item">
              <Link to={`/lacak`} className="d-sidebar-nav-link">
              
                <div >
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Tracking} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Lacak
                </span>
              
              </Link>
            </li>
            <li className="d-sidebar-nav-item">
              <Link to={`/historidriver`} className="d-sidebar-nav-link">
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
              
        {/* end sidebar */}
        {/* main content */}
        <div className="d-wrapper">
          <div className="d-row">
            <div className="d-col-12 d-col-m-12 d-col-sm-12">
              <div className="d-card">
                <div className="d-card-header d-row">
                  <h3>
                    Berapa Target Hari ini :
                  </h3>
                  <form style={{paddingLeft: '10px'}}>
                    <input type="text" name="input" className="d-input-target" /> Km.
                    <input type="button" name="target" className="d-button-target" defaultValue="Kirim" />
                  </form>
                </div>						
              </div>
              <div className="d-card">
                <div className="d-card-header">
                  <h3>
                    Histori Target
                  </h3>
                  <i className="fas fa-redo-alt" />
                </div>
                <div className="d-card-content">
                  <table className="d-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>tanggal</th>
                        <th>Target</th>
                        <th>Jarak tertempuh</th>
                        <th>Keterangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>02/01/2020</td>
                        <td>5 Km</td>
                        <td>3 Km </td>
                        <td>
                          <span className="d-dot">
                            <i className="d-bg-danger" />
                            Tidak tercapai
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>03/01/2020</td>
                        <td>5 Km</td>
                        <td>6 Km </td>
                        <td>
                          <span className="d-dot">
                            <i className="d-bg-success" />
                            tercapai
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>04/01/2020</td>
                        <td>3 Km</td>
                        <td>3 Km </td>
                        <td>
                          <span className="d-dot">
                            <i className="d-bg-success" />
                            tercapai
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>05/01/2020</td>
                        <td>4 Km</td>
                        <td>5 Km </td>
                        <td>
                          <span className="d-dot">
                            <i className="d-bg-success" />
                            tercapai
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>06/01/2020</td>
                        <td>7 Km</td>
                        <td>8 Km </td>
                        <td>
                          <span className="d-dot">
                            <i className="d-bg-success" />
                            tercapai
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>07/01/2020</td>
                        <td>4 Km</td>
                        <td>6 Km </td>
                        <td>
                          <span className="d-dot">
                            <i className="d-bg-success" />
                            tercapai
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>08/01/2020</td>
                        <td>5 Km</td>
                        <td>5 Km </td>
                        <td>
                          <span className="d-dot">
                            <i className="d-bg-success" />
                            tercapai
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>09/01/2020</td>
                        <td>3 Km</td>
                        <td>4 Km </td>
                        <td>
                          <span className="d-dot">
                            <i className="d-bg-success" />
                            tercapai
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>      
     </div>
        )
    }
}

export default Target
