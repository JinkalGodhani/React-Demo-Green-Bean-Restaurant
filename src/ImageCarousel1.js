import React from 'react';
import Slider from 'react-slick';
import slide1 from './carousel1_1.jpeg';
import slide2 from './carousel1_2.jpeg';
import slide3 from './carousel1_3.jpeg';


export class ImageCarousel1 extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
          };
        return(
            <div className="container-fluid" style={{marginTop: -19}}>
                <Slider {...settings}>
                    <div className="container caro_container">
                        <img src={slide1} style={{width:'100%'}} />
                        <div className="carousel-caption">
                            <h3>The <span style={{color: '#2ecc71'}}>delicious</span> food tastes</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h5>
                            <button className="btn btn_1 text-center" type="submit">Order Now</button> 
                            <button className="btn btn_1 text-center" type="submit" style={{backgroundColor: 'transparent', color:'#2ecc71', borderColor: '#2ecc71', borderWidth: 2}}>More Food</button>
                        </div>
                    </div>
                    <div className="container caro_container">
                        <img src={slide2} style={{width:'100%'}} />
                        <div className="carousel-caption">
                            <h3>The <span style={{color: '#2ecc71'}}>delicious</span> food tastes</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h5>
                            <button className="btn btn_1" type="submit">Order Now</button> 
                            <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'#2ecc71', borderColor: '#2ecc71', borderWidth: 2}}>More Food</button>
                        </div>
                    </div>
                    <div className="container caro_container">
                        <img src={slide3} style={{width:'100%'}} />
                        <div className="carousel-caption">
                            <h3>The <span style={{color: '#2ecc71'}}>delicious</span> food tastes</h3>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h5>
                            <button className="btn btn_1" type="submit">Order Now</button> 
                            <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'#2ecc71', borderColor: '#2ecc71', borderWidth: 2}}>More Food</button>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}