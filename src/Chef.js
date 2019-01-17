import React from 'react';
import chef1 from './chef1.jpg';
import chef2 from './chef2.jpg';
import chef3 from './chef3.jpg';
import chef4 from './chef4.jpg';
import chef5 from './chef5.jpg';
import Slider from 'react-slick';

export class Chef extends React.Component {
    render() {
        const settings = {
            dots: true,
            centerMode: true,
            infinite: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
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
            <div className="container" id="chef">
                <h2 className="font_fam" style={{color: '#2ecc71', textAlign: 'center', marginTop: 40}}>Our Delicious</h2>
                <h2 style={{textAlign: 'center', marginBottom: 30}}>Meet Our Expert Chefs</h2>
                <Slider {...settings}>
                    <div>
                        <img className="center chef_spec rounded-circle" src={chef1} alt="Chef1" />
                    </div>
                    <div>
                        <img className="center chef_spec rounded-circle" src={chef2} alt="Chef2" />
                    </div>
                    <div>
                        <img className="center chef_spec rounded-circle" src={chef3} alt="Chef3" />
                    </div>
                    <div>
                        <img className="center chef_spec rounded-circle" src={chef4} alt="Chef4" />
                    </div>
                    <div>
                        <img className="center chef_spec rounded-circle" src={chef5} alt="Chef5" />
                    </div>
                </Slider>
            </div>
        );
    }
}