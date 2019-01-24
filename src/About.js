import React from 'react';
import chef from './chef.jpeg';

export class About extends React.Component {
    render() {
        return(
            <div className="container font_sz" id="about" style={{marginTop: 30}}>
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="font_fam" style={{color: '#2ECC71'}}>Green Bean</h3>
                        <h3><a className="under_line" style={{marginRight: '-4px'}}>Dis</a>cover Our Restaurant</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <button className="btn" style={{width: 100, height: 35, fontSize: 13}}>Read More</button>
                    </div>
                    <div className="col-lg-6">
                        <img className="chef" src={chef} alt="Chef" />
                    </div>
                </div>
            </div>
        );
    }
}