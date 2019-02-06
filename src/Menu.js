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
            autoplaySpeed: 3000,
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
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
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

        return (
            <div className="container container1" id="menu" style={{ marginTop: 40 }}>
                <h3 className="font_fam" style={{ color: '#2ecc71', textAlign: 'center' }}>Our Special Dishes</h3>
                <h3 style={{ textAlign: 'center', marginBottom: 30 }}>Let's Disco<span className="under_line" style={{ marginLeft: '-3px' }}>ver</span> Our Food</h3>

                <Slider {...settings}>
                    <div className="card_border">
                        <div className="card card1">
                            <img className="card-img-top" src={slick1} />
                            <div className="card-body">
                                <h6 className="card-title" style={{ float: 'left' }}>
                                    Menu
                        </h6>
                                <h6 className="card-title" style={{ float: 'right', marginRight: -19 }}>
                                    $20
                        </h6>
                                <br />
                                <p className="card-text text-muted" style={{ marginTop: 10 }}>
                                    Lorem ipsum dolor sit amet, consectetur.
                        </p>
                            </div>
                        </div>
                    </div>
                    <div className="card_border">
                        <div className="card card1">
                            <img className="card-img-top" src={slick2} />

                            <div className="card-body">
                                <h6 className="card-title" style={{ float: 'left' }}>
                                    Menu
                        </h6>
                                <h6 className="card-title" style={{ float: 'right', marginRight: -19 }}>
                                    $20
                        </h6>
                                <br />
                                <p className="card-text text-muted" style={{ marginTop: 10 }}>
                                    Lorem ipsum dolor sit amet, consectetur.
                        </p>
                            </div>
                        </div>
                    </div>

                    <div className="card_border">
                        <div className="card card1">
                            <img className="card-img-top" src={slick3} />
                            <div className="card-body">
                                <h6 className="card-title" style={{ float: 'left' }}>
                                    Menu
                        </h6>
                                <h6 className="card-title" style={{ float: 'right', marginRight: -19 }}>
                                    $20
                        </h6>
                                <br />
                                <p className="card-text text-muted" style={{ marginTop: 10 }}>
                                    Lorem ipsum dolor sit amet, consectetur.
                        </p>
                            </div>
                        </div>
                    </div>

                    <div className="card_border">
                        <div className="card card1">
                            <img className="card-img-top" src={slick4} />
                            <div className="card-body">
                                <h6 className="card-title" style={{ float: 'left' }}>
                                    Menu
                        </h6>
                                <h6 className="card-title" style={{ float: 'right', marginRight: -19 }}>
                                    $20
                        </h6>
                                <br />
                                <p className="card-text text-muted" style={{ marginTop: 10 }}>
                                    Lorem ipsum dolor sit amet, consectetur.
                        </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}




