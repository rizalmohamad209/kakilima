import React, { Component } from 'react'
import Nav from './Nav'
import Biker from '../../assets/images/biker.svg'
import Dashboard from '../../assets/images/dashboard.svg'
import Pesanan from '../../assets/images/pesanan.svg'
import Produk from '../../assets/images/produk.svg'
import Keuangan from '../../assets/images/keuangan.svg'
import toko from '../../assets/images/toko.svg'
import { Link } from 'react-router-dom'

export class Toko extends Component {
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
              <Link to={`/keuangan`} className="sidebar-nav-link">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Keuangan} width="30px" height="30px" alt=""/>
                </div>
                <span>Keuangan</span>
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to={`toko`} className="sidebar-nav-link active">
              
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={toko} width="30px" height="30px" alt=""/>
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
                <h3>
                  Atur Toko
                </h3>
                <i className="fas fa-ellipsis-h" />
              </div>
              <div className="p-card-content">
                <table>
                  <tbody><tr>
                      <td>Nama Toko</td>
                      <td>:</td>
                      <td><input className="input-produk" type="text" placeholder="Nama Toko" /></td>
                    </tr>
                    <tr>
                      <td>Tambah Kategori</td>
                      <td>:</td>
                      <td><input className="input-produk" type="text" /></td>
                    </tr>
                    <tr>
                      <td>Deskripsi toko</td>
                      <td>:</td>
                      <td><textarea className="input-produk" name="desc" id cols={30} rows={10} defaultValue={""} /></td>
                      <div className="tbl">
                      <a href className="button" style={{marginRight:'20px', }}>Tambah Produk</a>
                      </div>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
          <div className="p-col-4 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Gambar Toko
                </h3>
                <i className="fas fa-ellipsis-h" />
              </div>
              <div className="p-card-content">
                <i className="fas fa-plus" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="p-col-12 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Pengunjung Toko
                </h3>
              </div>
              <div className="p-card-content">
                <canvas id="myChart" />
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Toko
