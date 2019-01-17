import React from 'react';
import blog1 from './blog1.jpeg';
import blog2 from './blog2.jpeg';
import blog3 from './blog3.jpeg';

export class Blog extends React.Component {
    render() {
        return(
            <div className="container">
                <h2 style={{color: '#2ecc71', textAlign: 'center', marginTop: 50}}>Our Blogs</h2>
                <h2 style={{textAlign: 'center', marginBottom: 30}}>Latest News Update</h2>

                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={blog1} />
                        <div className="card-body">
                            <h4 className="card-title">
                                The Tasty Food Ever
                            </h4>
                            <h6 className="card-title">
                                1 Jan 2017 by <span style={{color: '#2ecc71'}}>Mahedi</span>
                            </h6>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="card-footer">
                                <a href="#" style={{color: 'black'}}>
                                    <h5 style={{float: 'left'}}>Read More&nbsp;&nbsp;</h5>
                                    <span className="glyphicon glyphicon-arrow-right" style={{float: 'left'}}></span>
                                </a>
                                <a href="#" style={{color: 'black'}}>
                                    <span className="glyphicon glyphicon-comment" style={{float: 'right'}}></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={blog2} />
                        <div className="card-body">
                            <h4 className="card-title">
                                The Tasty Food Ever
                            </h4>
                            <h6 className="card-title">
                                1 Jan 2017 by <span style={{color: '#2ecc71'}}>Mahedi</span>
                            </h6>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="card-footer">
                            <a href="#" style={{color: 'black'}}>
                                <h5 style={{float: 'left'}}>Read More&nbsp;&nbsp;</h5>
                                <span className="glyphicon glyphicon-arrow-right" style={{float: 'left'}}></span>
                            </a>
                            <a href="#" style={{color: 'black'}}>
                                <span className="glyphicon glyphicon-comment" style={{float: 'right'}}></span>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={blog3} />
                        <div className="card-body">
                            <h4 className="card-title">
                                The Tasty Food Ever
                            </h4>
                            <h6 className="card-title">
                                1 Jan 2017 by <span style={{color: '#2ecc71'}}>Mahedi</span>
                            </h6>
                            <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="card-footer">
                            <a href="#" style={{color: 'black'}}>
                                <h5 style={{float: 'left'}}>Read More&nbsp;&nbsp;</h5>
                                <span className="glyphicon glyphicon-arrow-right" style={{float: 'left'}}></span>
                            </a>
                            <a href="#" style={{color:'black'}}>
                                <span className="glyphicon glyphicon-comment" style={{float: 'right'}}></span>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}