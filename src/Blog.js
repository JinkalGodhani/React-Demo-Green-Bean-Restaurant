import React from 'react';
import blog1 from './blog1.jpeg';
import blog2 from './blog2.jpeg';
import blog3 from './blog3.jpeg';

export class Blog extends React.Component {
    render() {
        return(
            <div className="container" id="blog">
                <h3 className="font_fam" style={{color: '#2ecc71', textAlign: 'center', marginTop: 50}}>Our Blogs</h3>
                <h3 style={{textAlign: 'center', marginBottom: 30}}>Latest N<span className="under_line" style={{marginRight: '-4px', marginLeft: '-4px'}}>ew</span>s Update</h3>

                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={blog1} />
                        <div className="card-body">
                            <h5 className="card-title">
                                The Tasty Food Ever
                            </h5>
                            <h6 className="card-title">
                                1 Jan 2017 by <span style={{color: '#2ecc71'}}>Mahedi</span>
                            </h6>
                            <p className="card-text text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="card-footer">
                                <a href="#" style={{color: 'black'}}>
                                    <h6 style={{float: 'left'}}>Read More&nbsp;&nbsp;</h6>
                                    <i class="fa fa-arrow-right" aria-hidden="true" style={{float: 'left'}}></i>
                                </a>
                                <a className="disappear_content" href="#" style={{color: 'black'}}>
                                    <h6 style={{float: 'right'}}>&nbsp;5</h6>
                                    <i class="far fa-comment" style={{float:'right'}}></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={blog2} />
                        <div className="card-body">
                            <h5 className="card-title">
                                The Tasty Food Ever
                            </h5>
                            <h6 className="card-title">
                                1 Jan 2017 by <span style={{color: '#2ecc71'}}>Mahedi</span>
                            </h6>
                            <p className="card-text text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="card-footer">
                                <a href="#" style={{color: 'black'}}>
                                    <h6 style={{float: 'left'}}>Read More&nbsp;&nbsp;</h6>
                                    <i class="fa fa-arrow-right" aria-hidden="true" style={{float: 'left'}}></i>
                                </a>
                                <a className="disappear_content" href="#" style={{color: 'black'}}>
                                    <h6 style={{float: 'right'}}>&nbsp;5</h6>
                                    <i class="far fa-comment" style={{float:'right'}}></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={blog3} />
                        <div className="card-body">
                            <h5 className="card-title">
                                The Tasty Food Ever
                            </h5>
                            <h6 className="card-title">
                                1 Jan 2017 by <span style={{color: '#2ecc71'}}>Mahedi</span>
                            </h6>
                            <p className="card-text text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="card-footer">
                                <a href="#" style={{color: 'black'}}>
                                    <h6 style={{float: 'left'}}>Read More&nbsp;&nbsp;</h6>
                                    <i class="fa fa-arrow-right" aria-hidden="true" style={{float: 'left'}}></i>

                                </a>
                                <a className="disappear_content" href="#" style={{color: 'black'}}>
                                    <h6 style={{float: 'right'}}>&nbsp;5</h6>
                                    <i class="far fa-comment" style={{float:'right'}}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}