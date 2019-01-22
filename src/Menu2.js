import React from 'react';
import menu from './menu.jpg';
import food_icon from './food_icon.jpg';

var Style = {
    backgroundImage: "url(" +  menu  + ")",
    marginTop: 50,
    backgroundAttachment: "fixed"
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
                            <h3 className="text-center h3_1">Our Best Food Recipes</h3>
                            <br />
                            <h3 className="text-center h3_2" style={{marginBottom: 60}}>Best offers from house chef</h3>
                            <div className="menu2" style={{marginBottom: 30}}>
                                <img className="img_align center" src={food_icon} style={{height: 70, width: 70, float: 'left'}} />
                                <h5 className="h5_price" style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4 className="h5_menu text-center">&nbsp;&nbsp;   Menu Title Here</h4>
                                &nbsp;&nbsp;<hr className="hr_margin" style={{marginTop: '-3px', marginLeft: 80}} />
                                <h5 className="h5_create text-center">&nbsp;&nbsp;  We create, make and serve fresho</h5>
                            </div>
                            <div className="menu2" style={{marginBottom: 30}}>
                                <img className="img_align center" src={food_icon} style={{height: 70, width: 70, float: 'left'}} />
                                <h5 className="h5_price" style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4 className="h5_menu text-center">&nbsp;&nbsp;  Menu Title Here</h4>
                                &nbsp;&nbsp;<hr className="hr_margin" style={{marginTop: '-3px', marginLeft: 80}} />
                                <h5 className="h5_create text-center">&nbsp;&nbsp; We create, make and serve fresho</h5>
                            </div>
                            <div  className="menu2">
                                <img className="img_align center" src={food_icon} style={{height: 70, width: 70, float: 'left'}} />
                                <h5 className="h5_price" style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4 className="h5_menu text-center">&nbsp;&nbsp; Menu Title Here</h4>
                                &nbsp;&nbsp;<hr className="hr_margin" style={{marginTop: '-3px', marginLeft: 80}} />
                                <h5 className="h5_create text-center">&nbsp;&nbsp; We create, make and serve fresho</h5>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h3 className="text-center h3_1">Our Best Food Recipes</h3>
                            <br />
                            <h3 className="text-center h3_2" style={{marginBottom: 60}}>Best offers from house chef</h3>
                            <div className="menu2" style={{marginBottom: 30}}>
                                <img className="img_align center" src={food_icon} style={{height: 70, width: 70, float: 'left'}} />
                                <h5 className="h5_price" style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4 className="h5_menu text-center">&nbsp;&nbsp; Menu Title Here</h4>
                                &nbsp;&nbsp;<hr className="hr_margin" style={{marginTop: '-3px', marginLeft: 80}} />
                                <h5 className="h5_create text-center">&nbsp;&nbsp; We create, make and serve fresho</h5>
                            </div>
                            <div className="menu2" style={{marginBottom: 30}}>
                                <img className="img_align center" src={food_icon} style={{height: 70, width: 70, float: 'left'}} />
                                <h5 className="h5_price" style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4 className="h5_menu text-center">&nbsp;&nbsp; Menu Title Here</h4>
                                &nbsp;&nbsp;<hr className="hr_margin" style={{marginTop: '-3px', marginLeft: 80}} />
                                <h5 className="h5_create text-center">&nbsp;&nbsp; We create, make and serve fresho</h5>
                            </div>
                            <div className="menu2">
                                <img className="img_align center" src={food_icon} style={{height: 70, width: 70, float: 'left'}} />
                                <h5 className="h5_price" style={{float: 'right', color: '#2ecc71'}}>$20</h5>
                                <h4 className="h5_menu text-center">&nbsp;&nbsp; Menu Title Here</h4>
                                &nbsp;&nbsp;<hr className="hr_margin" style={{marginTop: '-3px', marginLeft: 80}} />
                                <h5 className="h5_create text-center">&nbsp;&nbsp; We create, make and serve fresho</h5>
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