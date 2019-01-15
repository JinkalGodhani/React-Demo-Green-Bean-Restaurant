import React from 'react';
import para1 from './carousel1_1.jpeg';

export class Reservation extends React.Component {
    render() {
        return(
            <div className="container-fluid content">
                <img src={para1} alt="Kitchen1" />

                <div class="card-deck">
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
                </div>

            </div>
        );
    }
}