import React from 'react';
import para1 from './parallax.jpeg';

export class Reservation extends React.Component {
    render() {
        return(
            <div className="container-fluid parallax ">
                <img src={para1} alt="Kitchen1" style={{width:'100%'}} />

                {/* <div class="card-deck">
                    <div class="card">
                        <div class="card-body text-center">
                            <p class="card-text">Mon-Fri</p>
                            <p class="card-text">Breakfast</p>
                            <p class="card-text">8.00 - 12.00</p>
                            <button class="btn1 card-text">Order</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body text-center">
                            <p class="card-text">Mon-Fri</p>
                            <p class="card-text">Breakfast</p>
                            <p class="card-text">8.00 - 12.00</p>
                            <button class="btn1 card-text">Order</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body text-center">
                            <p class="card-text">Mon-Fri</p>
                            <p class="card-text">Breakfast</p>
                            <p class="card-text">8.00 - 12.00</p>
                            <button class="btn1 card-text">Order</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body text-center">
                            <p class="card-text">Mon-Fri</p>
                            <p class="card-text">Breakfast</p>
                            <p class="card-text">8.00 - 12.00</p>
                            <button class="btn1 card-text">Order</button>
                        </div>
                    </div>
                </div> */}

            </div>
        );
    }
}