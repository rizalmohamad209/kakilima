import React, { Component } from 'react'
import Nav from './Nav'
import Biker from '../../assets/images/biker.svg'
import Img2 from '../../assets/images/img2.jpg'
import Img5 from '../../assets/images/img5.jpg'
import img10 from '../../assets/images/img10.jpg'
import Dashboard from '../../assets/images/dashboard.svg'
import Toko from '../../assets/images/toko.svg'
import Histori from '../../assets/images/history.svg'
import Tracking from '../../assets/images/tracking.svg'
import { Link } from 'react-router-dom'

export class Lelang extends Component {

  toggleClass = () => {
    const oldClassName = document.getElementById('maps').className;
    const newClassName = oldClassName === '' ? 'd-map-expand' : ''
    document.getElementById('maps').className = newClassName
  }
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
              <Link to={`/lelang`} className="d-sidebar-nav-link active">
              
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

      <div className="d-wrapper">
        <div className="d-row">
          <div className="d-col-12 d-col-m-12 d-col-sm-12">
            <div className="d-card">
              <div className="d-card-header">
                <h3>
                  Lelang
                </h3>
                <i className="fas fa-redo-alt" />
              </div>
              <div className="d-card-content d-row">
                <div>
                  <img className="d-lelang-img" src={Img2} alt="" />
                </div>
                <div>
                  <div style={{paddingBottom: '5px'}}>
                    <b>Rumah Makan Padang</b><br />
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
                        <b>LLG0001</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{borderRight: '1px solid #727475', paddingRight: '20px'}}>
                        <p>Alamat</p>
                        <b>Desa Jatibarang</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{borderRight: '1px solid #727475', paddingRight: '20px'}}>
                        <p>Tujuan</p>
                        <b>Desa Karanglo</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{paddingRight: '20px', borderRight: '1px solid #727475'}}>
                        <p>jarak</p>
                        <b>550 M</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{paddingRight: '20px'}}>
                        <p>Pasang Bid</p>
                        <form className="l-form">
                          <b>Rp. <input type="text" name="input" className="d-input-bid" placeholder="Max.10.000" /></b>
                          <input type="button" name="target" className="d-button-bid" defaultValue="Bid" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div style={{paddingTop: '5px'}}>
                    <table>
                      <tbody><tr>
                          <td style={{width: '105px'}} valign="top">Pesanan</td>
                          <td><b>1 Nasi Padang Ayam Bakar</b><br />
                            <b>1 Nasi Padang Rendang</b>
                          </td>
                        </tr></tbody></table>
                  </div>
                  <div id="maps">
                    <button className="d-map-button" onClick={this.toggleClass}>Lihat Peta
                      <i className="fas fa-map-marked-alt" /></button>
                  </div>
                  <div className="d-map ">
                    <iframe className="d-col-12 d-col-m-12 d-col-sm-12 d-col-xl-12" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15841.157756636947!2d109.05796666908813!3d-6.975137669375194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x2e6fbc6b78cb2dc1%3A0x2251f80bacaa5e07!2snasi%20padang%20jatibarang!3m2!1d-6.9684064999999995!2d109.06635039999999!4m5!1s0x2e6fbc38f4bc7a7f%3A0x663a9e021a3ff34a!2sKaranglo%2C%20Kabupaten%20Brebes%2C%20Jawa%20Tengah!3m2!1d-6.982256!2d109.0713268!5e0!3m2!1sid!2sid!4v1605109253948!5m2!1sid!2sid" style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} height={450} frameBorder={0} />
                  </div>
                </div>
              </div>
              <div className="d-card-content d-row" style={{borderTop: '1px solid #f0f0f0'}}>
                <img className="d-lelang-img" src={Img5} alt="" />
                <div>
                  <div style={{paddingBottom: '5px'}}>
                    <b>Ketoprak Malehoy </b>
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
                        <b>LLG0002</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{borderRight: '1px solid #727475', paddingRight: '20px'}}>
                        <p>Alamat</p>
                        <b>Desa Randusari</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{borderRight: '1px solid #727475', paddingRight: '20px'}}>
                        <p>Tujuan</p>
                        <b>Desa Pesarean</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{paddingRight: '20px', borderRight: '1px solid #727475'}}>
                        <p>jarak</p>
                        <b>400 M</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{paddingRight: '20px'}}>
                        <p>Pasang Bid</p>
                        <form className="l-form">
                          <b>Rp. <input type="text" name="input" className="d-input-bid" placeholder="Max.10.000" /></b>
                          <input type="button" name="target" className="d-button-bid" defaultValue="Bid" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div style={{paddingTop: '5px'}}>
                    <table>
                      <tbody><tr>
                          <td style={{width: '105px'}} valign="top">Pesanan</td>
                          <td><b>1 Ketoprak Telor</b><br />
                            <b>2 Ketoprak Biasa</b>
                          </td>
                        </tr></tbody></table>
                  </div>
                  <div>
                    <button className="d-map-button" onclick="collapseMap1()">Lihat Peta
                      <i className="fas fa-map-marked-alt" /></button>
                  </div>
                  <div className="d-map1">
                    <iframe className="d-col-12 d-col-m-12 d-col-sm-12 d-col-xl-12" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3960.230082281731!2d109.06071801427751!3d-6.982153294956015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x2e6fbd9bc5a3faa9%3A0x22c4405e6d686aa3!2sKetoprak%20Malehoy%20Om%20Cakep%2C%20Jl.%20Raya%20Randusari%2C%20Pasarean%2C%20Pesarean%2C%20Pagerbarang%2C%20Tegal%2C%20Central%20Java%2052462!3m2!1d-6.9834461999999995!2d109.0656326!4m5!1s0x2e6fbc44d1d8bb2f%3A0xd8c62cfce15cf489!2sPesarean%2C%20Pagerbarang%2C%20Tegal%2C%20Jawa%20Tengah!3m2!1d-6.9808021!2d109.0601808!5e0!3m2!1sid!2sid!4v1605109163956!5m2!1sid!2sid" style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} height={450} frameBorder={0} />
                  </div>
                </div>
              </div>
              <div className="d-card-content d-row" style={{borderTop: '1px solid #f0f0f0'}}>
                <img className="d-lelang-img" src={img10} alt=""/>
                <div>
                  <div style={{paddingBottom: '5px'}}>
                    <b>Batagor Reny</b>
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
                        <b>LLG0003</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{borderRight: '1px solid #727475', paddingRight: '20px'}}>
                        <p>Alamat</p>
                        <b>Desa Lebaksiu</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{borderRight: '1px solid #727475', paddingRight: '20px'}}>
                        <p>Tujuan</p>
                        <b>Desa Balapulang</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{paddingRight: '20px', borderRight: '1px solid #727475'}}>
                        <p>jarak</p>
                        <b>300 M</b>
                      </div>
                    </div>
                    <div className="d-lelang-item d-col-3 d-col-m-4 d-col-sm-6" style={{paddingTop: '5px'}}>
                      <div style={{paddingRight: '20px'}}>
                        <p>Pasang Bid</p>
                        <form className="l-form">
                          <b>Rp. <input type="text" name="input" className="d-input-bid" placeholder="Max.10.000" /></b>
                          <input type="button" name="target" className="d-button-bid" defaultValue="Bid" />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div style={{paddingTop: '5px'}}>
                    <table>
                      <tbody><tr>
                          <td style={{width: '105px'}} valign="top">Pesanan</td>
                          <td><b>2 Batagor Ayam</b><br />
                            <b>2 Batagor Ikan</b>
                          </td>
                        </tr></tbody></table>
                  </div>
                  <div>
                    <button className="d-map-button" onclick="collapseMap2()">Lihat Peta
                      <i className="fas fa-map-marked-alt" /></button>
                  </div>
                  <div className="d-map2">
                    <iframe className="d-col-12 d-col-m-12 d-col-sm-12 d-col-xl-12" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15838.923260104668!2d109.1077825190953!3d-7.040888368630481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x2e6f95b84155e30d%3A0x8aefb1f4fe1dad4!2sBatagor%20Reny%2C%20Balaradin%2C%20Kec.%20Lebaksiu%2C%20Tegal%2C%20Jawa%20Tengah%2052461!3m2!1d-7.0338256!2d109.1128281!4m5!1s0x2e6f95948b92ae5f%3A0xc80ad72b1fd7c03!2sTAMAN%20TEKNOLOGI%20PERTANIAN%20LEBAKSIU%2C%20Duren%20Sawit%2C%20Jl.%20Kesuben%2C%20Kademangan%2C%20Lebaksiu%20Lor%2C%20Kec.%20Lebaksiu%2C%20Tegal%2C%20Jawa%20Tengah%2052461!3m2!1d-7.047951299999999!2d109.11955499999999!5e0!3m2!1sid!2sid!4v1605109046370!5m2!1sid!2sid" style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} height={450} frameBorder={0} />
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

export default Lelang
