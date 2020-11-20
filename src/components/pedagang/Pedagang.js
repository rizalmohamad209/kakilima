import React, { Component } from 'react'
import Nav from './Nav'

import Biker from '../../assets/images/biker.svg'
import Dashboard from '../../assets/images/dashboard.svg'
import Pesanan from '../../assets/images/pesanan.svg'
import Produk from '../../assets/images/produk.svg'
import Keuangan from '../../assets/images/keuangan.svg'
import Toko from '../../assets/images/toko.svg'
import GrafikPesanan from '../chart/GrafikPesanan'
import PieToko from '../chart/PieToko'
import { Link } from 'react-router-dom'

export class Pedagang extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div id="bars">
                <div className="sidebar">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <Link to={`/pedagang`} className="sidebar-nav-link active">
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
              <Link to={'/produk'} className="sidebar-nav-link">
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
            <div className="counter bg-primary">
              <p>
                <i className="fas fa-tasks" />
              </p>
              <h3>100+</h3>
              <p>Pesanan </p>
            </div>
          </div>
          <div className="p-col-4 p-col-m-6 p-col-sm-6">
            <div className="counter bg-warning">
              <p>
                <i className="fas fa-star-half-alt" />
              </p>
              <h3>4</h3>
              <p>Rating Toko</p>
            </div>
          </div>
          <div className="p-col-4 p-col-m-6 p-col-sm-6">
            <div className="counter bg-success">
              <p>
                <i className="fas fa-wallet" />
              </p>
              <h3>Rp 350.000</h3>
              <p>Saldo Penjual</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="p-col-8 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Grafik Pesanan
                </h3>
              </div>
              <div className="p-card-content">
                <GrafikPesanan/>
              </div>
            </div>
          </div>
          <div className="p-col-4 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Rating Toko
                </h3>
              </div>
              <div className="p-card-content">
                <PieToko/>
              </div>
            </div>
          </div>
        </div>
        {/* histori penjualan */}
        <div className="row">
          <div className="p-col-12 p-col-m-12 p-col-sm-12">
            <div className="p-card" style={{paddingBottom: '30px'}}>
              <div className="p-card-header">
                <h3>
                  Riwayat penjualan
                </h3>
                <i className="fas fa-ellipsis-h" />
              </div>
              <div className="p-card-content">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Pemesan</th>
                      <th>Pesanan</th>
                      <th>Jumlah</th>
                      <th>Alamat tujuan</th>
                      <th>Status</th>
                      <th>Tanggal</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nama Pemesan</td>
                      <td>Bakso urat</td>
                      <td>2 </td>
                      <td>Desa Sidomulyo</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          Selesai
                        </span>
                      </td>
                      <td>02/07/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" /><span>4.5</span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Nama Pemesan</td>
                      <td>Martabaka Manis</td>
                      <td>1 </td>
                      <td>Desa Surokidul</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          Selesai
                        </span>
                      </td>
                      <td>03/07/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" /><span>4.5</span>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Nama Pemesan</td>
                      <td>Batagor ikan</td>
                      <td>4 </td>
                      <td>Desa karangnyar</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>04/07/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" /><span>4</span>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Nama Pemesan</td>
                      <td>Seblak pedes</td>
                      <td>2 </td>
                      <td>Desa Sidomulyo</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          Sukses
                        </span>
                      </td>
                      <td>05/07/2020</td>
                      <td style={{color: '#f0932b'}}>
                        <i className="fas fa-star" /><span>5</span>
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

export default Pedagang
