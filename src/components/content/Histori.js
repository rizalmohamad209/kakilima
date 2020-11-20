import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import {Container} from 'react-bootstrap'
import Img2 from '../../assets/images/img2.jpg'
import '../css/Histori.css'

import Img3 from '../../assets/images/img2.jpg'

export class Histori extends Component {
    render() {
        return (
            
            <div>
            <Navbar/> 
            <div className="d-breadcrumb">
            <Link to={`/`}>
            <svg style={{marginLeft:'5%'}} width="5rem" height="4rem" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg> 
            </Link>
            </div>
            <Container>
            <div className="c-cart">
                <br/>
                <div className="h-box">
                <div className="order">
                    <figure>
                        <img className="h-img" src={Img2} alt=""/>
                    </figure>
                    <div className="describ">
                    <span style={{fontWeight:'bold'}}>Bakso Kuah</span>
                    <span> Rp 10000 / porsi</span>
                    <span>Total: 2 Porsi</span>
                    </div>
                   </div>
                    <div className="lacak">
                        <span>Sedang DiAntar</span>
                        <Link to={`/deliver`}>
                        <a href="..." className="button"> Lacak</a>
                        </Link>
                    </div>
                    
                    </div>

                    <div className="h-box">
                <div className="order">
                    <figure>
                        <img className="h-img" src={Img3} alt=""/>
                    </figure>
                    <div className="describ">
                    <span style={{fontWeight:'bold'}}>Bakso Kuah</span>
                    <span> Rp 10000 / porsi</span>
                    <span>Total: 2 Porsi</span>
                    </div>
                   </div>
                    <div className="lacak">
                        <Link>
                        <a href="..." className="button"> Selesai</a>
                        </Link>
                    </div>
                    
                    </div>
                
                </div>
             </Container>   
             </div>

        )
    }
}

export default Histori
