import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css"
import React from "react";
import Slider from "react-slick";


function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="img/slider/1.jpg" className="img"/>
      </div>
      <div>
        <img src="img/slider/2.jpg" className="img"/>
      </div>
      <div>
        <img src="img/slider/3.jpg" className="img"/>
      </div>
    </Slider>
  );
}

export default SimpleSlider

