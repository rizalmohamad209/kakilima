import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './css/Slider.css'
export class Sllider extends Component {

    render() {
        const settings = {
            dots: true,
            autoplay: true,
            
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        
        return (
            <div className="slider">
            
            <Slider {...settings}>    
            <div className="s-img"><img src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896299/slider_jbtsoj.jpg" width="1200px" alt=""/></div>
            <div className="s-img"><img src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896299/slider_jbtsoj.jpg" width="1200px" alt=""/></div>
            <div className="s-img"><img src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1605896299/slider_jbtsoj.jpg" width="1200px" alt=""/></div>
            </Slider>
      
            </div>
        )
    }
}

export default Sllider

