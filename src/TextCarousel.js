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
            <div className="container-fluid text_carousel" style={ Style } id="pages">
            <div className="container-fluid">
                <div className="container text-center"  style={{marginTop: 100}}>
                <h1 className="inverted_comma">“</h1>
                <Slider {...settings}>

                    <div className="text_container">
                        <p className="actual_content">
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                        <br />
                        <h6 className="font_fam" style={{color: '#2ecc71'}}>Bra<span className="under_line_white" style={{marginRight: '-2px', marginLeft: '-2px'}}>in Sm</span>ith</h6>
                        </p>
                    </div>
                    <div className="text_container">
                        <p className="actual_content">
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                        <br />
                        <h6 className="font_fam" style={{color: '#2ecc71'}}>Bra<span className="under_line_white" style={{marginRight: '-2px', marginLeft: '-2px'}}>in Sm</span>ith</h6>
                        </p>
                    </div>
                    <div className="text_container">
                        <p className="actual_content">
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                        <br />
                        <h6 className="font_fam" style={{color: '#2ecc71'}}>Bra<span className="under_line_white" style={{marginRight: '-2px', marginLeft: '-2px'}}>in Sm</span>ith</h6>
                        </p>
                    </div>
                </Slider>
                </div>
            </div>
            </div>
        );
    }
}