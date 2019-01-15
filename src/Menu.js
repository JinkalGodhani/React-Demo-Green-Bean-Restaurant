import React from 'react';
import slick1 from './slick_slider-1.jpeg';
import slick2 from './slick_slider-2.jpeg';
import slick3 from './slick_slider-3.jpeg';
import slick4 from './slick_slider-4.jpeg';
import Slider from "react-slick";


export class Menu extends React.Component {

    render() {
        const settings = {
            dots: true,
            centerMode: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return(
            <div className="container container1">
                <h2 style={{color: '#2ecc71', textAlign: 'center'}}>Our Special Dishes</h2>
                <h2 style={{textAlign: 'center'}}>Lets Discover Our Food</h2>
                
                <Slider>
                <div className="card card1" style={{width: '18rem'}}>
                    <img className="card-img-top" src={slick1} />   
                    <div className="card-body">
                        <h3 className="card-text" style={{float: 'left'}}>Menu</h3>
                        <h3 className="card-text" style={{float: 'right'}}>$20</h3> 
                        <p class="card-text" style={{float:'left'}}>Lorem Ipsum</p>
                    </div>
                </div>

                <div className="card card1" style={{width: '18rem'}}>
                    <img className="card-img-top" src={slick2} />   
                    <div className="card-body">
                        <h3 className="card-text" style={{float: 'left'}}>Menu</h3>
                        <h3 className="card-text" style={{float: 'right'}}>$20</h3> 
                        <p class="card-text" style={{float:'left'}}>Lorem Ipsum</p>
                    </div>
                </div>

                <div className="card card1" style={{width: '18rem'}}>
                    <img className="card-img-top" src={slick3} />   
                    <div className="card-body">
                        <h3 className="card-text" style={{float: 'left'}}>Menu</h3>
                        <h3 className="card-text" style={{float: 'right'}}>$20</h3> 
                        <p class="card-text" style={{float:'left'}}>Lorem Ipsum</p>
                    </div>
                </div>

                <div className="card card1" style={{width: '18rem'}}>
                    <img className="card-img-top" src={slick4} />   
                    <div className="card-body">
                        <h3 className="card-text" style={{float: 'left'}}>Menu</h3>
                        <h3 className="card-text" style={{float: 'right'}}>$20</h3> 
                        <p class="card-text" style={{float:'left'}}>Lorem Ipsum</p>
                    </div>
                </div>
                </Slider>
            </div>
        );
    }
}




