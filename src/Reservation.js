import React from 'react';
import para1 from './parallax.jpeg';

export class Reservation extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                 <div class="flex-container">
                    <img className="parallax" src={para1} alt="Kitchen1" />

                    <h1>Opening Hours</h1>
                    <h1>Call For Reservation</h1>

           
                    <div>
                        Mon-Fri<br/>
                        <b>breakfast</b><br/>
                        8:00-12:00<br/>
                        <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'black', borderColor: 'black', borderWidth: 1}}>Order</button>   
                    </div>
                    <div>
                        Mon-Fri<br/>
                        <b>breakfast</b><br/>
                        8:00-12:00<br/>
                        <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'black', borderColor: 'black', borderWidth: 1}}>Order</button>   
                    </div>
                    <div>
                        Mon-Fri<br/>
                        <b>breakfast</b><br/>
                        8:00-12:00<br/>
                        <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'black', borderColor: 'black', borderWidth: 1}}>Order</button>   
                    </div>
                    <div>
                        Mon-Fri<br/>
                        <b>breakfast</b><br/>
                        8:00-12:00<br/>
                        <button className="btn btn_1" type="submit" style={{backgroundColor: 'transparent', color:'black', borderColor: 'black', borderWidth: 1}}>Order</button>   
                    </div>
                </div>
            </div>
        );
    }
}