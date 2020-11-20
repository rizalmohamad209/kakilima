import React, { Component } from 'react'
import Nav from './Nav'
import Biker from '../../assets/images/biker.svg'
import Dashboard from '../../assets/images/dashboard.svg'
import Toko from '../../assets/images/toko.svg'
import History from '../../assets/images/history.svg'
import Tracking from '../../assets/images/tracking.svg'
import { Link } from 'react-router-dom'

export class Histori extends Component {
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
              <Link to={`/historidriver`}  className="d-sidebar-nav-link active">
              
                <div >
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={History} width="30px" height="30px" alt=""/>
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
                  Histori
                </h3>
                <i className="fas fa-redo-alt" />
              </div>
              <div className="d-card-content">
                <table className="d-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Warung</th>
                      <th>Pesanan</th>
                      <th>Jumlah</th>
                      <th>Alamat Warung</th>
                      <th>Alamat tujuan</th>
                      <th>Status</th>
                      <th>Tanggal</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Bakso Rahayu</td>
                      <td>Bakso urat</td>
                      <td>2 </td>
                      <td>Desa Jatiwangi</td>
                      <td>Desa Sidomulyo</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-warning" />
                          On The way
                        </span>
                      </td>
                      <td>14/07/2020</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Martabak terang bulan</td>
                      <td>Martabaka Manis</td>
                      <td>1 </td>
                      <td>Desa Jatiwangi</td>
                      <td>Desa Surokidul</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>14/07/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Batagor khas bogor</td>
                      <td>Batagor ikan</td>
                      <td>4 </td>
                      <td>Desa Jatiwangi</td>
                      <td>Desa karangnyar</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>13/07/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Seblak pantura</td>
                      <td>Seblak pedes</td>
                      <td>2 </td>
                      <td>Desa Jatiwangi</td>
                      <td>Desa Sidomulyo</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>12/07/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Soto Pak harto</td>
                      <td>Soto babat</td>
                      <td>1 </td>
                      <td>Desa Jatiwangi</td>
                      <td>Desa Slerok</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>11/01/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Bakso Rahayu</td>
                      <td>Bakso urat</td>
                      <td>2 </td>
                      <td>Desa Jatiwangi</td>
                      <td>Desa Sidomulyo</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>10/07/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Martabak terang bulan</td>
                      <td>Martabaka Manis</td>
                      <td>1 </td>
                      <td>Desa Jatiwangi</td>
                      <td>Desa Surokidul</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>09/07/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Batagor khas bogor</td>
                      <td>Batagor ikan</td>
                      <td>4 </td>
                      <td>Desa Jatiwangi</td>
                      <td>Desa karangnyar</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>09/07/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Seblak pantura</td>
                      <td>Seblak pedes</td>
                      <td>2 </td>
                      <td>Desa Jatiwangi</td>
                      <td>Desa Sidomulyo</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>14/06/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Soto Pak harto</td>
                      <td>Soto babat</td>
                      <td>1 </td>
                      <td>Desa Jatiwangi</td>
                      <td>Desa Slerok</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>13/06/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Ketoprak Jaya</td>
                      <td>Ketoprak</td>
                      <td>3 </td>
                      <td>Desa Rajegwesi</td>
                      <td>Desa Sidakaton</td>
                      <td>
                        <span className="d-dot">
                          <i className="d-bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>12/06/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
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

export default Histori
