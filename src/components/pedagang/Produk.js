import React, { Component } from 'react'
import Nav from './Nav'
import Biker from '../../assets/images/biker.svg'
import Dashboard from '../../assets/images/dashboard.svg'
import Pesanan from '../../assets/images/pesanan.svg'
import produks from '../../assets/images/produk.svg'
import Keuangan from '../../assets/images/keuangan.svg'
import Toko from '../../assets/images/toko.svg'
import { Link } from 'react-router-dom'


export class Produk extends Component {
    render() {
        return (
            <div>
                 <Nav/>
                <div id="bars">
                <div className="sidebar">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <Link to={`/pedagang`}  className="sidebar-nav-link ">
             
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={Dashboard} width="30px" height="30px" alt=""/>
                </div>
                <span>
                  Dashboard
                </span>
              
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to={`/pesanan`}  className="sidebar-nav-link">
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
              <Link to={`/produk`} className="sidebar-nav-link active">
                <div>
                <img style={{marginTop:'20px', marginLeft:'20px'}} src={produks} width="30px" height="30px" alt=""/>
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
                <h3>
                  Tambah Produk
                </h3>
                <i className="fas fa-ellipsis-h" />
              </div>
              <div className="p-card-content">
                <table>
                  <tbody><tr>
                      <td>Nama Produk</td>
                      <td>:</td>
                      <td><input className="input-produk" type="text" placeholder="Nama Produk" /></td>
                    </tr>
                    <tr>
                      <td>Kategori</td>
                      <td>:</td>
                      <td><input className="input-produk" type="text" /></td>
                    </tr>
                    <tr>
                      <td>Deskripsi</td>
                      <td>:</td>
                      <td><textarea className="input-produk" name="desc" id cols={30} rows={10} defaultValue={""} /></td>
                    </tr>
                    <div className="tbl" style={{marginRight:'100px'}}> <br/>
                      <a href className="button" style={{marginRight:'20px', }}>Tambah Produk</a>
                </div>
                  </tbody></table>
              </div>
            </div>
          </div>
          <div className="p-col-4 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Tambahkan Gambar
                </h3>
                <i className="fas fa-ellipsis-h" />
              </div>
              <div className="p-card-content" style={{margin:'auto'}}>
                <img src="https://via.placeholder.com/350 x 150" alt=""/>
                <div className="tbl" style={{marginTop:'50px'}}> 
                      <a href className="button" style={{marginRight:'20px', }}>Tambah Gambar</a>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="p-col-8 p-col-m-12 p-col-sm-12">
            <div className="p-card">
              <div className="p-card-header">
                <h3>
                  Detail Produk
                </h3>
                <i className="fas fa-ellipsis-h" />
              </div>
              <div className="p-card-content">
                <table>
                  <tbody><tr>
                      <td>Harga</td>
                      <td>:</td>
                      <td><input className="input-produk" type="number" placeholder /></td>
                    </tr>
                    <tr>
                      <td>Stock</td>
                      <td>:</td>
                      <td><input className="input-produk" type="number" /></td>
                    </tr>
                    <tr>
                      <td>Berat Produk</td>
                      <td>:</td>
                      <td><input className="input-produk" type="number" /></td>
                    </tr>
                    <div className="tbl" style={{marginRight:'100px'}}>
                      <a href className="button" style={{marginRight:'20px', }}>Tambah Detail Produk</a>
                </div>
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>

            </div>
        )
    }
}

export default Produk
