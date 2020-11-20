import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Container, Card, Row, Col} from 'react-bootstrap'
import {DataContext} from '../Context'
import Slider from '../Sllider'
import Navbar from '../Navbar'
import '../css/Product.css'

export class Products extends Component {

    static contextType = DataContext;


    render() {
        const {products, addCart} = this.context;
        
        return (
            <>
            <Navbar/>
            <Slider/>
            <Container fluid>
                <h4>Category</h4>
            <Row style={{margin:'auto'}} className="rows" sm={2} xs={2} md={4}>
                
                <Col style={{display:'flex', justifyContent:'center'}}>
                <Card  style={{ width: '130px', height: '130px', marginBottom:'30px' }}>
                        <Card.Body>
                            <Card.Img width="80px" height="80px" src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896305/map_xqgdpq.svg"/>
                            <Card.Title>Terdekat</Card.Title>
                        </Card.Body>
                        </Card>
                </Col>
                <Col style={{display:'flex', justifyContent:'center'}}>
                <Card   style={{ width: '130px', height: '130px', marginBottom:'30px' }}>
                        <Card.Body>
                        <Card.Img width="80px" height="80px" src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896305/like_dlzlnc.svg"/>
                        <Card.Title>Favorit</Card.Title>
                        </Card.Body>
                        </Card>
                </Col>
                <Col style={{display:'flex', justifyContent:'center'}}>
                <Card  style={{ width: '130px', height: '130px', marginBottom:'30px' }}>
                        <Card.Body>
                        <Card.Img width="80px" height="80px" src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896304/badge_kgfwso.svg"/>
                        <Card.Title>Terlaris</Card.Title>
                        </Card.Body>
                        </Card>
                </Col>
                <Col style={{display:'flex', justifyContent:'center'}}>
                <Card  style={{ width: '130px', height: '130px', marginBottom:'30px' }}>
                        <Card.Body>
                        <Card.Img width="80px" height="80px" src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896304/24-hours_ria0vz.svg"/>
                        <Card.Title>24 Jam</Card.Title>
                        </Card.Body>
                        </Card>
                        
                </Col>
               
            </Row>

            
            <div id="product">
                
                <Row className="rows"  sm={2} xs={2} md={4}>
                
                {
                    products.map(product =>(

                        <div key={product._id}>
                        <h4 style={{lineHeight:'0'}}>{product.category}</h4>
                        <Col className="cols" >
                           
                            
                            <div id="fda_product_tile">
                        
                        <div class="card" style={{borderRadius:'25px', marginTop:'-10px'}}>
                        <div class="food_tile active">
                            
                        
                            <Link to={`product/${product._id}`}>
                               <Card.Img className="p-img" src={product.imageUrl} /> 
                            </Link>
                           
                            
                            <span className="food_name">
                            <Link to={`product/${product._id}`}>{product.name}</Link>
                            </span>
                            <span className="food_detail">
                                {product.bahan}
                            </span>
                            <span className="food_detail">{product.descripton}</span>
                            <ul id="food_meta">
                        <li>
                            Jarak
                    <span>{product.jarak}</span>
                        </li>
                        <li>
                            Price
                    <span>{product.price}</span>
                        </li>
                    </ul>
                    
                    <button onClick={()=> addCart(product._id)} type="button"  className="btn btn-sm btn-default">Order Now</button>
                    
                           
                            </div>
                            </div>
                            </div>
                        </Col>
                        </div>
                    ))
                    
                }
                </Row>
                
            </div>

            </Container>
            </>
            
        )
    }
}

export default Products
