import React from 'react';
import slick1 from './slick_slider-1.jpeg';
import slick2 from './slick_slider-2.jpeg';
import slick3 from './slick_slider-3.jpeg';
import slick4 from './slick_slider-4.jpeg';
import Slider from 'react-slick';


export class Menu extends React.Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
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
            <div className="container container1" id="menu" style={{marginTop: 40}}>
                <h2 className="font_fam" style={{color: '#2ecc71', textAlign: 'center'}}>Our Special Dishes</h2>
                <h2 style={{textAlign: 'center', marginBottom:30, marginRight: 0}}>Lets Disc<span className="under_line">over</span> Our Food</h2>
                
                <Slider {...settings}>

                <div className="card card1">
                    <img className="card-img-top" src={slick1} />
                    <div className="card-body">
                        <h4 className="card-title">
                            Menu
                        </h4>
                        <h4 className="card-title" style={{float:'right'}}>
                            $20
                        </h4>
                        <br />
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
                </div>

                <div className="card card1">
                    <img className="card-img-top" src={slick2} />
                    <div className="card-body">
                        <h4 className="card-title">
                            Menu
                        </h4>
                        <h4 className="card-title" style={{float:'right'}}>
                            $20
                        </h4>
                        <br />
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
                </div>

                <div className="card card1">
                    <img className="card-img-top" src={slick3} />
                    <div className="card-body">
                        <h4 className="card-title">
                            Menu
                        </h4>
                        <h4 className="card-title" style={{float:'right'}}>
                            $20
                        </h4>
                        <br />
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
                </div>

                <div className="card card1">
                    <img className="card-img-top" src={slick4} />
                    <div className="card-body">
                        <h4 className="card-title">
                            Menu
                        </h4>
                        <h4 className="card-title" style={{float:'right'}}>
                            $20
                        </h4>
                        <br />
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
                </div>
                
                </Slider>
            </div>
        );
    }
}




