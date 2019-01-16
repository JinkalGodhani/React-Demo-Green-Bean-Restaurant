import React from 'react';
import Slider from 'react-slick';
import food from './food.jpeg';

export class TextCarousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            centerMode: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div className="container-fluid" style={{marginTop: 50}}>
                <img src={food} style={{width: '100%'}} />
                <Slider {...settings}>

                    <div className="text_container">
                        <p className="actual_content">Hello</p>
                    </div>
                    <div>
                        <p>Hi</p>
                    </div>
                    <div>
                        <p>How are you?</p>
                    </div>
                </Slider>
            </div>
        );
    }
}