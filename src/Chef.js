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
            infinite: true,
            centerMode: true,
            centerPadding: '60px',
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
            <div className="container">
                <h3 className="font_fam" style={{color: '#2ecc71', textAlign: 'center', marginTop: 40}}>Our Delicious</h3>
                <h3 style={{textAlign: 'center', marginBottom: 30}}>Meet Our <span className="under_line" style={{marginRight:'-4px'}}>Exp</span>ert Chefs</h3>
                <Slider {...settings}>
                    <div className="focus_img">
                        <img className="center chef_spec rounded-circle" src={chef1} alt="Chef1" />
                        <h5 className="text-center txt_disappear" style={{marginTop: 10, display: 'block'}}>Elizabeth Jones</h5>
                        <h6 className="text-center txt_disappear" style={{color: '#2ecc71', display: 'block'}}>Chief Cook</h6>
                    </div>
                    <div>
                        <img className="center chef_spec rounded-circle" src={chef2} alt="Chef2" />
                        <h5 className="text-center" style={{marginTop: 10}}>Elizabeth Jones</h5>
                        <h6 className="text-center" style={{color: '#2ecc71'}}>Chief Cook</h6>
                    </div>
                    <div>
                        <img className="center chef_spec rounded-circle" src={chef3} alt="Chef3" />
                        <h5 className="text-center" style={{marginTop: 10}}>Elizabeth Jones</h5>
                        <h6 className="text-center" style={{color: '#2ecc71'}}>Chief Cook</h6>
                    </div>
                    <div>
                        <img className="center chef_spec rounded-circle" src={chef4} alt="Chef4" />
                        <h5 className="text-center" style={{marginTop: 10}}>Elizabeth Jones</h5>
                        <h6 className="text-center" style={{color: '#2ecc71'}}>Chief Cook</h6>
                    </div>
                    <div>
                        <img className="center chef_spec rounded-circle" src={chef5} alt="Chef5" />
                        <h5 className="text-center" style={{marginTop: 10}}>Elizabeth Jones</h5>
                        <h6 className="text-center" style={{color: '#2ecc71'}}>Chief Cook</h6>
                    </div>
                </Slider>
            </div>
        );
    }
}