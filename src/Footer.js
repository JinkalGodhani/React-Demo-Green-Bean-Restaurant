import React from 'react';

export class Footer extends React.Component {
    render() {
        return(
            <div className="container-fluid" id="footer" style={{backgroundColor: 'black', marginTop: 30, paddingBottom: 30, paddingTop: 20}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 txt_col">
                            <h4>GREEN <span style={{color: '#2ECC71'}}>BEAN</span></h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h6 style={{display: 'inline'}}>Address</h6>
                                    <h6 className="appear" style={{textAlign: 'right'}}>Milion Building</h6>
                                </div>
                                <div className="col-lg-6">
                                    <h6 className="disappear" style={{textAlign: 'right'}}>Milion Building</h6>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                <h6 style={{display: 'inline'}}>Phone</h6>
                                <h6 className="appear" style={{textAlign: 'right', color:'white'}}>01778235039</h6>
                                </div>
                                <div className="col-lg-6">
                                    <h6 className="disappear" style={{textAlign: 'right', color:'white'}}>01778235039</h6>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                <h6 style={{display: 'inline'}}>Email</h6>
                                <h6 className="appear" style={{textAlign: 'right'}}>greenbean@info.com</h6>
                                </div>
                                <div className="col-lg-6">
                                <h6 className="disappear" style={{textAlign: 'right'}}>greenbean@info.com</h6>
                                </div>
                            </div> 
                            <hr />
                        </div>
                        <div className="col-lg-4 txt_col">
                            <h4>OPENING <span style={{color: '#2ECC71'}}>HOURS</span></h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h6 style={{display: 'inline'}}>Mon-Fri</h6>
                                    <h6 className="appear" style={{textAlign: 'right'}}>9am - 11pm</h6>
                                </div>
                                <div className="col-lg-6">
                                    <h6 className="disappear" style={{textAlign: 'right'}}>9am - 11pm</h6>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                    <h6 style={{display: 'inline'}}>Saturday</h6>
                                    <h6 className="appear" style={{textAlign: 'right'}}>8am - 8pm</h6>
                                </div>
                                <div className="col-lg-6">
                                    <h6 className="disappear" style={{textAlign: 'right'}}>8am - 8pm</h6>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                    <h6 style={{display: 'inline'}}>Sunday</h6>
                                    <h6 className="appear" style={{textAlign: 'right'}}>10am - 9pm</h6>
                                </div>
                                <div className="col-lg-6">
                                    <h6 className="disappear" style={{textAlign: 'right'}}>10am - 9pm</h6>
                                </div>
                            </div>  
                            <hr />
                        </div>
                        <div className="col-lg-4 txt_col">
                            <h4>FOLLOW <span style={{color: '#2ECC71'}}>US</span></h4>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h6>
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