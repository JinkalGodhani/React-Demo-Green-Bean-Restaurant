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
            autoplaySpeed: 2000,
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
            <div className="container-fluid">
                <Slider {...settings}>
                    <div className="container caro_container">
                        <img src={slide1} style={{width:'100%'}} />
                        <div className="carousel-caption">
                            <h1>The <span style={{color: '#2ecc71'}}>delicious</span> food tastes</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3>
                            <button className="btn btn_1" type="submit">Order Now</button> 
                            <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'white', borderColor: '#2ecc71', borderWidth: 2}}>More Food</button>
                        </div>
                    </div>
                    <div className="container caro_container">
                        <img src={slide2} style={{width:'100%'}} />
                        <div className="carousel-caption">
                            <h1>The <span style={{color: '#2ecc71'}}>delicious</span> food tastes</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3>
                            <button className="btn btn_1" type="submit">Order Now</button> 
                            <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'white', borderColor: '#2ecc71', borderWidth: 2}}>More Food</button>
                        </div>
                    </div>
                    <div className="container caro_container">
                        <img src={slide3} style={{width:'100%'}} />
                        <div className="carousel-caption">
                            <h1>The <span style={{color: '#2ecc71'}}>delicious</span> food tastes</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3>
                            <button className="btn btn_1" type="submit">Order Now</button> 
                            <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'white', borderColor: '#2ecc71', borderWidth: 2}}>More Food</button>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}







{/* <div class="item active">
                        <img src={slide1} alt="Kitchen1" />
                        <div className="caro_caption">
                            <h1>The <span style={{color: '#2ecc71'}}>delicious</span> food tastes</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3>
                            <button className="btn btn_1" type="submit">Order Now</button> 
                            <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'black', borderColor: '#2ecc71', borderWidth: 2}}>More Food</button>
                        </div>
                    </div> */}