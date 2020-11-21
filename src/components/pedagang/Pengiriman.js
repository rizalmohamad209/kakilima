import React, { Component } from 'react'
import Nav from './Nav'
import Biker from '../../assets/images/biker.svg'
import Dashboard from '../../assets/images/dashboard.svg'
import Pesanan from '../../assets/images/pesanan.svg'
import Produk from '../../assets/images/produk.svg'
import Keuangan from '../../assets/images/keuangan.svg'
import Toko from '../../assets/images/toko.svg'
import {Link} from 'react-router-dom'

export class Pengiriman extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div id="bars">
                <div className="sidebar">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <Link to={`/pedagang`}  className="sidebar-nav-link">
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
              <Link to={`/pengiriman`} className="sidebar-nav-link active">
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
          <div className="p-col-8 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>Lelang</h3>
                <div className="tbl" style={{marginTop:'50px', display:'flex'}}> 
                      <a href className="button" style={{marginRight:'20px', }}>Mulai</a>
                </div>
              </div>
              <div className="p-card-content">
                <table>
                  <tbody><tr>
                      <td>Pemesan</td>
                      <td>:</td>
                      <td>Nama </td>
                    </tr>
                    <tr>
                      <td>Pesanan</td>
                      <td>:</td>
                      <td>Bakso urat</td>
                    </tr>
                    <tr>
                      <td>Jumlah</td>
                      <td>:</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Tujuan</td>
                      <td>:</td>
                      <td>Desa Jatiwangi (500 Meter)</td>
                    </tr>
                    <tr>
                      <td>Ongkos Kirim</td>
                      <td>:</td>
                      <td>Rp 5000</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
          <div className="p-col-4 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Pemenang Lelang
                </h3>
              </div>
              <div className="p-card-content">
              <img src="https://via.placeholder.com/150" alt=""/>
                <span>Driver A</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="p-col-8 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>Lelang</h3>
                <div className="tbl" style={{marginTop:'50px', display:'flex'}}> 
                      <a href className="button" style={{marginRight:'20px', }}>Mulai</a>
                </div>

              </div>
              <div className="p-card-content">
                <table>
                  <tbody><tr>
                      <td>Pemesan</td>
                      <td>:</td>
                      <td>Nama </td>
                    </tr>
                    <tr>
                      <td>Pesanan</td>
                      <td>:</td>
                      <td>Bakso Sapi</td>
                    </tr>
                    <tr>
                      <td>Jumlah</td>
                      <td>:</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Tujuan</td>
                      <td>:</td>
                      <td>Desa Jatiasri (1000 Meter)</td>
                    </tr>
                    <tr>
                      <td>Ongkos Kirim</td>
                      <td>:</td>
                      <td>Rp 10.000</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
          <div className="p-col-4 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Pemenang Lelang
                </h3>
              </div>
              <div className="p-card-content">
              <img src="https://via.placeholder.com/150" alt=""/>
                <span>Driver B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
                
            </div>
        )
    }
}

export default Pengiriman
