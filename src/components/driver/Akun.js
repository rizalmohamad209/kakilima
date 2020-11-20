import React, {Component } from 'react'
import LineChart from '../chart/GarisChart'
import Pie from '../chart/Lingkaran'
import Target from '../chart/Target'
import TargetPie from '../chart/TargetPie'
import Nav from './Nav'
import './Akun.css'
import Biker from '../../assets/images/biker.svg'
import Dashboard from '../../assets/images/dashboard.svg'
import Toko from '../../assets/images/toko.svg'
import Histori from '../../assets/images/history.svg'
import Tracking from '../../assets/images/tracking.svg'
import './Driver'
import { Link } from 'react-router-dom'

export class Akun extends Component {
    
    render() {
     
        return (
          <div>
      <Nav/>
        <div id="bars">
          <div className="d-sidebar">
          <ul className="d-sidebar-nav">
            <li className="d-sidebar-nav-item">
              <a href="index.html" className="d-sidebar-nav-link active">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Dashboard} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Dashboard
                </span>
              </a>
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
                      {/* End sidebar */}
                      <div className="d-wrapper">
        <div className="d-row">
          <div className="d-col-3 d-col-m-6 d-col-sm-6">
            <a href="#" style={{textDecoration: 'none'}}>
              <div className="d-counter d-bg-primary">
                <p>
                  <i className="fas fa-biking" />
                </p>
                <h3>10 Km</h3>
                <p>Target hari ini</p>
              </div>
            </a>
          </div>
          <div className="d-col-3 d-col-m-6 d-col-sm-6">
            <a href="#" style={{textDecoration: 'none'}}>
              <div className="d-counter d-bg-warning">
                <p>
                  <i className="fas fa-clipboard-check" />
                </p>
                <h3>10</h3>
                <p>Pesanan Sukses</p>
              </div>
            </a>
          </div>
          <div className="d-col-3 d-col-m-6 d-col-sm-6">
            <a href="#" style={{textDecoration: 'none'}}>
              <div className="d-counter d-bg-success">
                <p>
                  <i className="fas fa-star-half-alt" />
                </p>
                <h3>4.5</h3>
                <p>Rating</p>
              </div>
            </a></div><a href="#" style={{textDecoration: 'none'}}>
          </a><div className="d-col-3 d-col-m-6 d-col-sm-6"><a href="#" style={{textDecoration: 'none'}}>
            </a><a href="#" style={{textDecoration: 'none'}}>
              <div className="d-counter d-bg-danger">
                <p>
                  <i className="fas fa-wallet" />
                </p>
                <h3>Rp. 200.000,-</h3>
                <p>E-wallet</p>
              </div>
            </a></div><a href="#" style={{textDecoration: 'none'}}>
          </a>
        </div>
        <div className="d-row">
          <div className="d-col-8 d-col-m-12 d-col-sm-12">
            <div className="d-card">
              <div className="d-card-header">
                <h3>
                  Grafik Pesanan sukses
                </h3>
              </div>
              <div className="d-card-content">
                <LineChart/>
              </div>
            </div>
          </div>
          <div className="d-col-4 d-col-m-12 d-col-sm-12">
            <div className="d-card">
              <div className="d-card-header">
                <h3>Rating Toko</h3>
              </div>
              <div className="d-card-content">
                <Pie/>
              </div>
            </div>
          </div>
        </div>
        <div className="d-row">
          <div className="d-col-8 d-col-m-12 d-col-sm-12">
            <div className="d-card">
              <div className="d-card-header">
                <h3>
                  Grafik Target tercapai (KM)
                </h3>
              </div>
              <div className="d-card-content">
              <Target/>
              </div>
            </div>
          </div>
          <div className="d-col-4 d-col-m-12 d-col-sm-12">
            <div className="d-card">
              <div className="d-card-header">
                <h3>
                  Presentasi Target tercapai
                </h3>
              </div>
              <div className="d-card-content">
                <TargetPie/>
              </div>
            </div>
          </div>
        </div>
        <div className="d-row">
          <div className="d-col-12 d-col-m-12 d-col-sm-12">
            <div className="d-card" style={{paddingBottom: '30px'}}>
              <div className="d-card-header">
                <h3>
                  Histori
                </h3>
                <i className="fas fa-ellipsis-h" />
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
                      <td>02/07/2020</td>
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
                      <td>03/07/2020</td>
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
                      <td>04/07/2020</td>
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
                      <td>05/07/2020</td>
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
                      <td>06/01/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
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
                      <td>07/01/2020</td>
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
              <a href="histori.html" style={{textDecoration: 'none', padding: '20px'}}>Lihat Selengkapnya
                <i className="fas fa-angle-double-right" /></a>
            </div>
          </div>
        </div>
      </div>
</div>
                      
                    
                    
        )
    }
}

export default Akun
