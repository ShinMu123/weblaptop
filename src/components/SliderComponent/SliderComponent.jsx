import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({arrImage = []}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    if (!arrImage || arrImage.length === 0) {
        return null; // or return some placeholder/loading state
    }

    return(
        <Slider {...settings}>
            {arrImage.map((image, index) => (
                <div key={index}>
                    <img src={image} alt="slider" style={{ width: '100%', height: '300px'}}/>
                </div>
            ))}
        </Slider>
    )
}

export default SliderComponent;