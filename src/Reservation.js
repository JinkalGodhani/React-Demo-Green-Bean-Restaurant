import React from 'react';
import para1 from './parallax.jpeg';

var sectionStyle = {
    backgroundImage: "url(" + para1 + ")",
    backgroundAttachment: "fixed"
};

export class Reservation extends React.Component {
    render() {
        return (
            <div className="container-fluid content" id="reservation" style={sectionStyle}>
                <h3 className="font_fam" style={{ textAlign: 'center', color: 'white' }}>Opening Hours</h3>
                <h3 style={{ textAlign: 'center', marginBottom: -25, color: 'white' }}>Call For <span className="under_line_white" style={{ marginRight: '-4px' }}>Res</span>ervation</h3>
                <div className="transparent_property">
                    <div className="container">
                        <div className="card-deck">
                            
                            <div className="card card1" style={{ backgroundColor: 'transparent' }}>
                            {/* <div className="container bg_blur"> */}
                                <div className="card-body text-center">
                                    <p className="card-text">Mon-Fri</p>
                                    <p className="card-text">Breakfast</p>
                                    <p className="card-text">8.00 - 12.00</p>
                                    <button className="btn1 card-text" style={{ backgroundColor: 'transparent', color: 'white' }}>Order</button>
                                </div>
                            {/* </div> */}
                            </div>
                            <div className="card card1" style={{ backgroundColor: 'transparent' }}>
                                <div className="card-body text-center">
                                    <p className="card-text">Mon-Fri</p>
                                    <p className="card-text">Breakfast</p>
                                    <p className="card-text">8.00 - 12.00</p>
                                    <button className="btn1 card-text" style={{ backgroundColor: 'transparent', color: 'white' }}>Order</button>
                                </div>
                            </div>
                            <div className="card card1" style={{ backgroundColor: 'transparent' }}>
                                <div className="card-body text-center">
                                    <p className="card-text">Mon-Fri</p>
                                    <p className="card-text">Breakfast</p>
                                    <p className="card-text">8.00 - 12.00</p>
                                    <button className="btn1 card-text" style={{ backgroundColor: 'transparent', color: 'white' }}>Order</button>
                                </div>
                            </div>
                            <div className="card card1" style={{ backgroundColor: 'transparent' }}>
                                <div className="card-body text-center">
                                    <p className="card-text">Mon-Fri</p>
                                    <p className="card-text">Breakfast</p>
                                    <p className="card-text">8.00 - 12.00</p>
                                    <button className="btn1 card-text" style={{ backgroundColor: 'transparent', color: 'white' }}>Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}