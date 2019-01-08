import React from 'react';
import slide1 from './carousel1_1.jpeg';
import slide2 from './carousel1_2.jpeg';
import slide3 from './carousel1_3.jpeg';


export class ImageCarousel1 extends React.Component {
    render() {
        return(
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
            
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
        
                <div class="carousel-inner">
                    <div class="item active">
                        <img src={slide1} alt="Kitchen1" />
                        <div className="carousel-caption">
                            <h1>The <span style={{color: '#2ecc71'}}>delicious</span> food tastes</h1>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h4>
                            <button className="btn btn_1" type="submit">Order Now</button> 
                            <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'black', borderColor: '#2ecc71', borderWidth: 2}}>More Food</button>
                        </div>
                    </div>
        
                    <div class="item">
                        <img src={slide2} alt="Kitchen2" />
                        <div className="carousel-caption">
                            <h1>The <span style={{color: '#2ecc71'}}>delicious</span> food tastes</h1>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h4>
                            <button className="btn btn_1" type="submit">Order Now</button> 
                            <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'black', borderColor: '#2ecc71', borderWidth: 2}}>More Food</button>
                        </div>
                    </div>
            
                    <div class="item">
                        <img src={slide3} alt="Kitchen3" />
                        <div className="carousel-caption">
                            <h1>The <span style={{color: '#2ecc71'}}>delicious</span> food tastes</h1>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h4>
                            <button className="btn btn_1" type="submit">Order Now</button> 
                            <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'black', borderColor: '#2ecc71', borderWidth: 2}}>More Food</button>
                        </div>
                    </div>
                </div>
        
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );
    }
}