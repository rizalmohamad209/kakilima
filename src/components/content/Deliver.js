import React, { Component } from 'react'
import Navbar from '../Navbar'
import {Container, Col,Row} from 'react-bootstrap'
import '../css/Deliver.css'
import Img2 from '../../assets/images/img2.jpg'
import Img5 from '../../assets/images/img5.jpg'
import Img10 from '../../assets/images/img10.jpg'
import Img12 from '../../assets/images/img12.jpg'
import biker from '../../assets/images/cycling.svg'
import profil from '../../assets/images/profil.jpg'

export class Deliver extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Container fluid>
                <img src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896299/maps_x4migx.jpg" className="del-img" alt=""/>
                <div className="box">
                    <div className="d-content">
                    <ul>
                        <img src={biker} width="20%" alt=""/>
                      <div className="list">
                        <li> <span>Form</span> </li>
                        <li> <span> Ndalem Parikesit</span></li>
                        <li> <span> To</span> </li>
                        <li> <span>  Alun alun Tegal</span></li>
                        </div>
                        <div className="report"> <p>i</p></div>
                       
                    </ul>
                    </div>
                   </div>
                   <center><img className="profil" src={profil} alt=""/></center>
                   <center>
                   <q>I am on the way to deliver your orders now. It will take about 23 minutes. Thank you for patience</q>
                   </center>
                   <div>
                       <p>Your orders (4)</p>
                   </div>

                   <Row xs={1} sm={2} md={2}>
                <Col>
                   <div className="order">
                    <figure>
                        <img src={Img2} alt=""/>
                    </figure>
                    <div className="describ">
                    <span style={{fontWeight:'bold'}}>Bakso Kuah</span>
                    <span> Rp 10000 / porsi</span>
                    <span>Total: 2 Porsi</span>
                    </div>
                   </div>
                   </Col>
                   <Col>

                   <div className="order">
                    <figure>
                        <img src={Img5} alt=""/>
                    </figure>
                    <div className="describ">
                    <span style={{fontWeight:'bold'}}>Bakso Kuah</span>
                    <span> Rp 10000 / porsi</span>
                    <span>Total: 2 Porsi</span>
                    </div>
                   </div>
                   </Col>

                    <Col>          
                   <div className="order">
                    <figure>
                        <img src={Img10} alt=""/>
                    </figure>
                    <div className="describ">
                    <span style={{fontWeight:'bold'}}>Bakso Kuah</span>
                    <span> Rp 10000 / porsi</span>
                    <span>Total: 2 Porsi</span>
                    </div>
                   </div>
                   </Col>  

                <Col>
                   <div className="order" style={{marginBottom:'50px'}}>
                    <figure>
                        <img src={Img12} alt=""/>
                    </figure>
                    <div className="describ">
                    <span style={{fontWeight:'bold'}}>Bakso Kuah</span>
                    <span> Rp 10000 / porsi</span>
                    <span>Total: 2 Porsi</span>
                    </div>
                   </div>
                   </Col>
                   </Row>
                </Container>

                
            </div>
        )
    }
}

export default Deliver
