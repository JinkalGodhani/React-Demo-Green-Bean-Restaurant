import React from 'react';
import menu from './menu.jpg';
import food_icon from './food_icon.jpg';

var Style = {
    backgroundImage: "url(" +  menu  + ")",
    marginTop: 50
  };

export class Menu2 extends React.Component {
    render() {
        return (
            <div className="container-fluid cont" style={ Style }> 
                <div className="container cont1">
                
                    <div className="row">
                        <div className="col-lg-1">
                        </div>
                        <div className="col-lg-5">
                            <h3>Our Best Food Recipes</h3>
                            <h3 style={{marginBottom: 60}}>Best offers from the house chef</h3>
                            <div style={{marginBottom: 30}}>
                                <img src={food_icon} style={{height: 40, width: 40, float: 'left'}} />
                                <h5 style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4>&nbsp;&nbsp;   Menu Title Here</h4>
                                <hr />
                                <h5>&nbsp;&nbsp;  We create, make and serve fresho</h5>
                            </div>
                            <div style={{marginBottom: 30}}>
                                <img src={food_icon} style={{height: 40, width: 40, float: 'left'}} />
                                <h5 style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4>&nbsp;&nbsp;  Menu Title Here</h4>
                                <hr />
                                <h5>&nbsp;&nbsp; We create, make and serve fresho</h5>
                            </div>
                            <div>
                                <img src={food_icon} style={{height: 40, width: 40, float: 'left'}} />
                                <h5 style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4>&nbsp;&nbsp; Menu Title Here</h4>
                                <hr />
                                <h5>&nbsp;&nbsp; We create, make and serve fresho</h5>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h3>Our Best Food Recipes</h3>
                            <h3 style={{marginBottom: 60}}>Best offers from the house chef</h3>
                            <div style={{marginBottom: 30}}>
                                <img src={food_icon} style={{height: 40, width: 40, float: 'left'}} />
                                <h5 style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4>&nbsp;&nbsp; Menu Title Here</h4>
                                <hr />
                                <h5>&nbsp;&nbsp; We create, make and serve fresho</h5>
                            </div>
                            <div style={{marginBottom: 30}}>
                                <img src={food_icon} style={{height: 40, width: 40, float: 'left'}} />
                                <h5 style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4>&nbsp;&nbsp; Menu Title Here</h4>
                                <hr />
                                <h5>&nbsp;&nbsp; We create, make and serve fresho</h5>
                            </div>
                            <div>
                                <img src={food_icon} style={{height: 40, width: 40, float: 'left'}} />
                                <h5 style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4>&nbsp;&nbsp; Menu Title Here</h4>
                                <hr />
                                <h5>&nbsp;&nbsp; We create, make and serve fresho</h5>
                            </div>
                        </div>
                        <div className="col-lg-1">
                        </div>
                    </div>                        
                </div>
                
            </div>
        );
    }
}