import React from 'react';

export class Footer extends React.Component {
    render() {
        return(
            <div className="container-fluid" id="footer" style={{backgroundColor: 'black', marginTop: 30, paddingBottom: 30}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 txt_col">
                            <h2>GREEN <span style={{color: '#2ECC71'}}>BEAN</span></h2>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 style={{display: 'inline'}}>Address</h4>
                                    <h4 className="appear" style={{textAlign: 'right'}}>Milion Building</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="disappear" style={{textAlign: 'right'}}>Milion Building</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                <h4 style={{display: 'inline'}}>Phone</h4>
                                <h4 className="appear" style={{textAlign: 'right', color:'white'}}>01778235039</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="disappear" style={{textAlign: 'right', color:'white'}}>01778235039</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                <h4 style={{display: 'inline'}}>Email</h4>
                                <h4 className="appear" style={{textAlign: 'right'}}>greenbean@info.com</h4>
                                </div>
                                <div className="col-lg-6">
                                <h4 className="disappear" style={{textAlign: 'right'}}>greenbean@info.com</h4>
                                </div>
                            </div> 
                            <hr />
                        </div>
                        <div className="col-lg-4 txt_col">
                            <h2>OPENING <span style={{color: '#2ECC71'}}>HOURS</span></h2>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 style={{display: 'inline'}}>Mon-Fri</h4>
                                    <h4 className="appear" style={{textAlign: 'right'}}>9am - 11pm</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="disappear" style={{textAlign: 'right'}}>9am - 11pm</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 style={{display: 'inline'}}>Saturday</h4>
                                    <h4 className="appear" style={{textAlign: 'right'}}>8am - 8pm</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="disappear" style={{textAlign: 'right'}}>8am - 8pm</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 style={{display: 'inline'}}>Sunday</h4>
                                    <h4 className="appear" style={{textAlign: 'right'}}>10am - 9pm</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="disappear" style={{textAlign: 'right'}}>10am - 9pm</h4>
                                </div>
                            </div>  
                            <hr />
                        </div>
                        <div className="col-lg-4 txt_col">
                            <h2>FOLLOW <span style={{color: '#2ECC71'}}>US</span></h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
                            <br />
                            <ul className="icon-types">
                                <li><a href="#"><i class="fab fa-facebook-f fa-2x"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter fa-2x"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin fa-2x"></i></a></li>
                                <li><a href="#"><i class="fab fa-youtube fa-2x"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}