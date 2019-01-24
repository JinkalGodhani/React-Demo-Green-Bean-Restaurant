import React from 'react';
import para1 from './parallax1.jpeg';

var sectionStyle = {
    backgroundImage: "url(" +  para1  + ")",
    backgroundAttachment: "fixed"
  };

export class Reservation extends React.Component {
    render() {
        return(
            <div className="container-fluid content" id="reservation" style={ sectionStyle }>
                <h3 className="font_fam" style={{marginTop: 20, textAlign: 'center', color: 'white'}}>Opening Hours</h3>
                <h3 style={{textAlign: 'center', marginBottom:-25, color: 'white'}}>Call For <span className="under_line_white" style={{marginRight: '-4px'}}>Res</span>ervation</h3>
                <div class="card-deck">
                    <div class="card card1" style={{backgroundColor: 'transparent'}}>
                        <div class="card-body text-center">
                            <p class="card-text">Mon-Fri</p>
                            <p class="card-text">Breakfast</p>
                            <p class="card-text">8.00 - 12.00</p>
                            <button class="btn1 card-text" style={{backgroundColor: 'transparent'}}>Order</button>
                        </div>
                    </div>
                    <div class="card card1" style={{backgroundColor: 'transparent'}}>
                        <div class="card-body text-center">
                            <p class="card-text">Mon-Fri</p>
                            <p class="card-text">Breakfast</p>
                            <p class="card-text">8.00 - 12.00</p>
                            <button class="btn1 card-text" style={{backgroundColor: 'transparent'}}>Order</button>
                        </div>
                    </div>
                    <div class="card card1" style={{backgroundColor: 'transparent'}}>
                        <div class="card-body text-center">
                            <p class="card-text">Mon-Fri</p>
                            <p class="card-text">Breakfast</p>
                            <p class="card-text">8.00 - 12.00</p>
                            <button class="btn1 card-text" style={{backgroundColor: 'transparent'}}>Order</button>
                        </div>
                    </div>
                    <div class="card card1" style={{backgroundColor: 'transparent'}}>
                        <div class="card-body text-center">
                            <p class="card-text">Mon-Fri</p>
                            <p class="card-text">Breakfast</p>
                            <p class="card-text">8.00 - 12.00</p>
                            <button class="btn1 card-text" style={{backgroundColor: 'transparent'}}>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}