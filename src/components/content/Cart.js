import React, {Component} from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import Money from '../../assets/images/money.svg'
import {Container,Row,Col} from 'react-bootstrap'
import '../css/Cart.css'

export class Cart extends Component {

    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    render() {
        const {cart, reduction,increase, removeProduct, total} = this.context;
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
            <Container fluid>
            <div className="c-cart">
                <br/>
                <div className="box-cart1">
                    <div style={{marginLeft:'5px'}} className="text">
                        <p>Alamat Tujuan</p>
                        <h5>JL Mataram No 9</h5>
                    <div className="peta">
                        <svg width="3rem" height="3rem" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                             <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </div>
                    </div>
                </div>
                {
                    cart.map(item =>(
                        
                        <div className="cart-box">
                            <div className="box-cart" style={{marginTop:'5px'}} key={item._id}>
                                <div className="c-content">
                                <img className="img" src={item.imageUrl} alt=""/>
                                <div className="c-body">
                                <span style={{fontWeight:'bold'}}>{item.name}</span>
                                <span>{item.bahan}</span>
                                <span style={{fontWeight:'bold'}}>Rp {item.price *item.count}</span>

                                </div>
                                </div>

                                
                                <div className="amount">
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>

                                        <button className="count-kurang" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count-tambah" onClick={() => increase(item._id)}> + </button>
                                    </div>
                            </div>
                            
                            
                            </div>
                            
                            
                        
                       
                    
                    ))


                }
                
                <div className="box-cart2">
                        <div style={{marginLeft:'5px'}} className="text">
                        <p>Pilih Pembayaran</p>
                        <div className="wallet">
                        <img width="50px" height="50px" src={Money} alt=""/>
                         <p className="e-wallet">E-Wallet</p>
                         </div>
                        <div className="peta">
                        <span>Ongkir </span>
                        <p>Rp 10000</p>
                        </div>
                        </div>
                        </div>     
                 
            </div>
            <Row className="rows"> 
            <Col className="col" md={12}>
            <div className="total">
                    <div className="sub-total">
                        <h5 >Subtotal :</h5>
                        <h5 style={{display:'inline-block'}}>Rp {total}</h5>
                    </div>    
                        <Link to={`/deliver`}>
                           <span>Checkout</span>
                        </Link>
                        
                    </div>
                    </Col>
                    </Row>
            
            </Container>
            </div>
        )
    }
}

export default Cart
