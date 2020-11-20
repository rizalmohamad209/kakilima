import React, { Component } from 'react'
import {DataContext} from "../Context"
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Rating from 'react-rating'
import Navbar from '../Navbar'
import '../css/Details.css'



export class Details extends Component {
    static contextType = DataContext;

    state = {
        product:[]
    }
    getProduct =()=>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
       
    };

    componentDidMount(){
        this.getProduct();
    }
    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <div>
                
            <Navbar/>
            <Container fluid>
            <div className="d-breadcrumb">
            <Link to={`/`}>
            <svg  width="3rem" height="4rem" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg> 
            </Link>
            </div>
            
            {
                
                product.map(item =>(
                    <div className="details" key={item._id}>
                        <Row className="rows justify-content-center" sm={1} xs={1} md={2}>
                        <Col md={6}>
                        <div className="d-img">
                        <img  className="img3" src={item.imageUrl} alt={item.name}/>
                        </div>
                        <div className="d-description">
                        <h5>Food Information</h5>
                        <p>{item.description}</p>
                        </div>
                        </Col>
                        <Col md={6}> 
                        <div className="d-title">
                        <p style={{fontWeight:'bolder',marginBottom:'30px'}}>{item.name}</p>
                        </div>
                        <div className="d-sub-title">
                        <span >{item.bahan} </span>
                        <span style={{fontWeight:'bold'}}>Rp {item.price} </span>
                        <span>{item.jarak} </span>
                        </div>
                         <br></br>
                         <div className="d-rate">
                        <Rating
                        placeholderRating={item.rate}
                        emptySymbol={<img src={item.placeholder} alt={item.name} className="icon" />}
                        placeholderSymbol={<img src={item.star} alt={item.name} className="icon" />}
                        readonly/> 
                        </div>
                        <div className="d-btn">
                        <Link to={`cart/`} onClick={() => addCart(item._id)} type='button' className="cart">
                        Add cart
                        </Link>
                        </div>
                        </Col>
                        </Row>
                        </div>
                       
                        
                        
                
                       
               
                ))
            }
            </Container>
           
            </div>
        )
    }
}

export default Details
