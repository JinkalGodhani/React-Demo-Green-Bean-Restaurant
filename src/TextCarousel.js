import React from 'react';
import Slider from 'react-slick';
import food from './food.jpeg';

var Style = {
    backgroundImage: "url(" +  food  + ")",
    marginTop: 50
  };

export class TextCarousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div className="container-fluid text_carousel" style={ Style }>
                <div className="container">
                <Slider {...settings}>

                    <div className="text_container">
                        <p className="actual_content">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                        <br />
                        <h4 className="font_fam" style={{color: '#2ecc71'}}>Brain Smith</h4>
                        </p>
                    </div>
                    <div className="text_container">
                        <p className="actual_content">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                        <br />
                        <h4 className="font_fam" style={{color: '#2ecc71'}}>Brain Smith</h4>
                        </p>
                    </div>
                    <div className="text_container">
                        <p className="actual_content">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                        <br />
                        <h4 className="font_fam" style={{color: '#2ecc71'}}>Brain Smith</h4>
                        </p>
                    </div>
                </Slider>
                </div>
            </div>
        );
    }
}