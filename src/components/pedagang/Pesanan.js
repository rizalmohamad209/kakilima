import React, { Component } from 'react'
import Nav from './Nav'
import Biker from '../../assets/images/biker.svg'
import Chart from '../chart/GarisChart'
import Dashboard from '../../assets/images/dashboard.svg'
import Pesan from '../../assets/images/pesanan.svg'
import Produk from '../../assets/images/produk.svg'
import Keuangan from '../../assets/images/keuangan.svg'
import Toko from '../../assets/images/toko.svg'
import { Link } from 'react-router-dom'

export class Pesanan extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div id="bars">
                <div className="sidebar">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <Link to={`/pedagang`} className="sidebar-nav-link">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Dashboard} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to={`/pesanan`}  className="sidebar-nav-link active">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Pesan} width="30px" height="30px" alt=""/>
                </div>
                <span>Pesanan</span>
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to={`/pengiriman`} className="sidebar-nav-link">
              
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Biker} width="30px" height="30px" alt=""/>
                </div>
                <span>Pengiriman</span>
              
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to={`/produk`} className="sidebar-nav-link">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Produk} width="30px" height="30px" alt=""/>
                </div>
                <span>Produk</span>
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to={`/keuangan`} className="sidebar-nav-link">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Keuangan} width="30px" height="30px" alt=""/>
                </div>
                <span>Keuangan</span>
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to={`/toko`} className="sidebar-nav-link">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Toko} width="30px" height="30px" alt=""/>
                </div>
                <span>Toko</span>
              </Link>
            </li>
          </ul>
        </div>
    </div>

	<div className="wrapper">
        <div className="row">
          <div className="p-col-4 p-col-m-6 p-col-sm-6">
            <div className="counter bg-warning">
              <p>
                <i className="fas fa-tasks" />
              </p>
              <h3>100+</h3>
              <p>Pesanan Masuk</p>
            </div>
          </div>
          <div className="p-col-4 p-col-m-6 p-col-sm-6">
            <div className="counter bg-danger">
              <p>
                <i className="fas fa-spinner" />
              </p>
              <h3>100+</h3>
              <p>Perlu Dikirim</p>
            </div>
          </div>
          <div className="p-col-4 p-col-m-6 p-col-sm-6">
            <div className="counter bg-success">
              <p>
                <i className="fas fa-check-circle" />
              </p>
              <h3>100+</h3>
              <p>Pesanan Selesai</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="p-col-8 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Perlu Dikirim
                </h3>
              </div>
              <div className="p-card-content">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Pesanan</th>
                      <th>Jumlah</th>
                      <th>Status</th>
                      <th>Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Bakso</td>
                      <td>2</td>
                      <td>
                        <span className="dot">
                          <i className="bg-warning" />
                          Perlu Dikirim
                        </span>
                      </td>
                      <td>17/07/2020</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Nama Produk </td>
                      <td>2</td>
                      <td>
                        <span className="dot">
                          <i className="bg-warning" />
                          Perlu Dikirim
                        </span>
                      </td>
                      <td>18/07/2020</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Nama Produk</td>
                      <td>6</td>
                      <td>
                        <span className="dot">
                          <i className="bg-warning" />
                          Perlu Dikirim
                        </span>
                      </td>
                      <td>17/07/2020</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Nama Produk</td>
                      <td>6</td>
                      <td>
                        <span className="dot">
                          <i className="bg-warning" />
                          Perlu Dikirim
                        </span>
                      </td>
                      <td>07/07/2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="p-col-4 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Progress Pesanan
                </h3>
              </div>
              <div className="p-card-content">
                <div className="progress-wrapper">
                  <p>
                    Pesanan Selesai
                    <span className="float-right">50%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-success" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    Pesanan Masuk
                    <span className="float-right">60%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-warning" style={{width: '60%'}} />
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    Perlu Dikirim
                    <span className="float-right">40%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-danger" style={{width: '40%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="p-col-12 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Pesanan Terkirim
                </h3>
              </div>
              <div className="card-content">
                <Chart/>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Pesanan
