import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo1 from '../assets/images/logo.png'
import {Container} from 'react-bootstrap'
import './css/Navbar.css'
import { DataContext } from './Context'



export class Navbar extends Component {
    static contextType = DataContext
    render() {
        const {cart} = this.context;
        return (
            <div>
            <Container>
                

            
            <nav className="coba fixed-top" style={{backgroundColor:'#FEBD2E'}}>
                    <Link to={`/product`} className="logo1">
                    <img src={Logo1} alt="" style={{width:'100ox', height:'100px'}}/>
                     </Link>
                    <ul className="menu">
                        <li>
                             <div className="nav-link" type="link" href="/">
                             <input className="form-control search"  type="text" placeholder="Cari makanan..."></input>
                            </div>
                        </li>
                        <li >
                            <Link to={`/histori`}>
                            <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" color="black" class="bi bi-receipt-cutoff chat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v13h-1V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51L2 2.118V15H1V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zM0 15.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                            <path fill-rule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                             </Link>
                        </li>
                        <li >
                             <Link to={`/profile`}>
                             <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" color="black" className="bi bi-person-fill user" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                             <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                             </svg>
                             </Link>
                            
                        </li>
                        <li >
                            <div type="link" className="nav-cart">
                            <span>{cart.length}</span>
                                 <Link to={`/cart/`}>
                             <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" color="black" className="bi bi-bag-fill shop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                             <path fillRule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                             </svg>
                             </Link>
                             </div>
                        </li>
                        </ul>
                </nav>
                </Container>


                
                <nav  className=" navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom " style={{background: '#FEBD2E'}}>
            <ul className="navbar-nav nav-justified w-100 ">
                <li className="nav-item ">
                    <Link to={`product`} className="nav-link">
                        <svg width="1em " height="1em " color="black" viewBox="0 0 16 16 " className="bi bi-house-door " fill="currentColor " xmlns="http://www.w3.org/2000/svg ">
                        <path fillRule="evenodd " d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5
        0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z "/>
                        <path fillRule="evenodd " d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z "/>
                      </svg>
                    </Link>
                </li>
               
                <li className="nav-item ">
                    <Link to={``} className="nav-link">
                        <svg width="1em " height="1em " color="black" viewBox="0 0 16 16 " className="bi bi-journal-text " fill="currentColor " xmlns="http://www.w3.org/2000/svg ">
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z "/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z "/>
                            <path fillRule="evenodd " d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1
        .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z "/>
                          </svg>
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link to={`/profile`} className="nav-link">
                        <svg width="1em " height="1em" color="black" viewBox="0 0 16 16 " className="bi bi-person " fill="currentColor " xmlns="http://www.w3.org/2000/svg ">
                            <path fillRule="evenodd " d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168
        1.332-.678.678-.83 1.418-.832 1.664h10z "/>
                          </svg>
                    </Link>
                </li>
            </ul>
        </nav>
                
        </div>
    
        )
    }
}

export default Navbar
