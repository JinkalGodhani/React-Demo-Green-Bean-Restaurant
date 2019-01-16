import React from 'react';

export class Copyright extends React.Component {
    render() {
        return(
            <div className="container-fluid" style={{backgroundColor: '#2ecc71'}}>
                <div className="container">
                    <h5 style={{color:'white', textAlign:'center', marginBottom:10, marginTop:10}}>Designed by Mahedi amin. All rights reserved.</h5>
                </div>
            </div>
        );
    }
}