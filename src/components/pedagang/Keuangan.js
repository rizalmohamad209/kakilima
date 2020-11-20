import React, { Component } from 'react'
import Nav from './Nav'
import Biker from '../../assets/images/biker.svg'
import Dashboard from '../../assets/images/dashboard.svg'
import Pesanan from '../../assets/images/pesanan.svg'
import Produk from '../../assets/images/produk.svg'
import uang from '../../assets/images/keuangan.svg'
import Toko from '../../assets/images/toko.svg'
import { Link } from 'react-router-dom'

export class Keuangan extends Component {
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
              <Link to={`/pesanan`} className="sidebar-nav-link">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Pesanan} width="30px" height="30px" alt=""/>
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
              <a href="Keuangan.html" className="sidebar-nav-link active">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={uang} width="30px" height="30px" alt=""/>
                </div>
                <span>Keuangan</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <Link to={`/toko`}  className="sidebar-nav-link">
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
          <div className="p-col-6 p-col-m-6 p-col-sm-6">
            <div className="counter bg-primary">
              <p>
                <i className="fas fa-wallet" />
              </p>
              <h3>Rp 80.000</h3>
              <p>Pendapatan</p>
            </div>
          </div>
          <div className="p-col-6 p-col-m-6 p-col-sm-6">
            <div className="counter bg-warning">
              <p>
                <i className="fas fa-wallet" />
              </p>
              <h3>Rp 1000</h3>
              <p>Saldo </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="p-col-12 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>Riwayat Transaksi</h3><span className="float-right">Periode: Juli 2020</span>
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
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nama Produk</td>
                      <td>2</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          selesai
                        </span>
                      </td>
                      <td>17/07/2020</td>
                      <td>Rp 10.000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Nama Produk </td>
                      <td>2</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          selesai
                        </span>
                      </td>
                      <td>18/07/2020</td>
                      <td>Rp 10.000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Nama Produk</td>
                      <td>6</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          selesai
                        </span>
                      </td>
                      <td>17/07/2020</td>
                      <td>Rp 30.000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Nama Produk</td>
                      <td>6</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          selesai
                        </span>
                      </td>
                      <td>07/07/2020</td>
                      <td>Rp 30.000</td>
                    </tr>
                  </tbody>
                </table>
                <h3>Sub Total : Rp 80.000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
            
            </div>
        )
    }
}

export default Keuangan
