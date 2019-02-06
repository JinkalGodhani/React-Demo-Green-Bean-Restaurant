import React from 'react';
import menu from './menu.jpg';
import food_icon from './food_icon.jpg';

var Style = {
    backgroundImage: "url(" + menu + ")",
    marginTop: 50,
    backgroundAttachment: "fixed", 
    marginBottom: 40
};

export class Menu2 extends React.Component {
    render() {
        return (
            <div className="container-fluid cont" style={Style} id="nocolor">
                <div className="cont1">
                    <div className="container">
                        <div className="row" style={{marginBottom: 20}}>
                            <div className="col-lg-1">
                            </div>
                            <div className="col-lg-5">
                                <h5 className="text-center h3_1">Our Best Food Recipes</h5>
                                {/* <br /> */}
                                <h5 className="text-center h3_2" style={{ marginBottom: 25 }}>Best offers from house chef</h5>
                                <div className="menu2" style={{ marginBottom: 30 }}>
                                    <img className="img_align center" src={food_icon} style={{ height: 65, width: 65, float: 'left' }} />
                                    <h6 className="h5_price" style={{ float: 'right', color: '#2ecc71', fontSize: 12 }}>$20</h6>
                                    <h6 className="h5_menu" style={{ fontSize: 12 }}>&nbsp;&nbsp;   Menu Title Here</h6>
                                    &nbsp;&nbsp;<hr className="hr_margin" style={{ marginTop: '-25px', marginLeft: 75 }} />
                                    <h6 className="h5_create" style={{ fontSize: 12 }}>&nbsp;&nbsp;  We create, make and serve fresho</h6>
                                </div>
                                <div className="menu2" style={{ marginBottom: 30 }}>
                                    <img className="img_align center" src={food_icon} style={{ height: 65, width: 65, float: 'left' }} />
                                    <h6 className="h5_price" style={{ float: 'right', color: '#2ecc71', fontSize: 12 }}>$20</h6>
                                    <h6 className="h5_menu" style={{ fontSize: 12 }}>&nbsp;&nbsp;   Menu Title Here</h6>
                                    &nbsp;&nbsp;<hr className="hr_margin" style={{ marginTop: '-25px', marginLeft: 75 }} />
                                    <h6 className="h5_create" style={{ fontSize: 12 }}>&nbsp;&nbsp;  We create, make and serve fresho</h6>
                                </div>
                                <div className="menu2">
                                    <img className="img_align center" src={food_icon} style={{ height: 65, width: 65, float: 'left' }} />
                                    <h6 className="h5_price" style={{ float: 'right', color: '#2ecc71', fontSize: 12 }}>$20</h6>
                                    <h6 className="h5_menu" style={{ fontSize: 12 }}>&nbsp;&nbsp;   Menu Title Here</h6>
                                    &nbsp;&nbsp;<hr className="hr_margin" style={{ marginTop: '-25px', marginLeft: 75 }} />
                                    <h6 className="h5_create" style={{ fontSize: 12 }}>&nbsp;&nbsp;  We create, make and serve fresho</h6>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <h5 className="text-center h3_1">Our Best Food Recipes</h5>
                                {/* <br /> */}
                                <h5 className="text-center h3_2" style={{ marginBottom: 25 }}>Best offers from house chef</h5>
                                <div className="menu2" style={{ marginBottom: 30 }}>
                                    <img className="img_align center" src={food_icon} style={{ height: 65, width: 65, float: 'left' }} />
                                    <h6 className="h5_price" style={{ float: 'right', color: '#2ecc71', fontSize: 12 }}>$20</h6>
                                    <h6 className="h5_menu" style={{ fontSize: 12 }}>&nbsp;&nbsp;   Menu Title Here</h6>
                                    &nbsp;&nbsp;<hr className="hr_margin" style={{ marginTop: '-25px', marginLeft: 75 }} />
                                    <h6 className="h5_create" style={{ fontSize: 12 }}>&nbsp;&nbsp;  We create, make and serve fresho</h6>
                                </div>
                                <div className="menu2" style={{ marginBottom: 30 }}>
                                    <img className="img_align center" src={food_icon} style={{ height: 65, width: 65, float: 'left' }} />
                                    <h6 className="h5_price" style={{ float: 'right', color: '#2ecc71', fontSize: 12 }}>$20</h6>
                                    <h6 className="h5_menu" style={{ fontSize: 12 }}>&nbsp;&nbsp;   Menu Title Here</h6>
                                    &nbsp;&nbsp;<hr className="hr_margin" style={{ marginTop: '-25px', marginLeft: 75 }} />
                                    <h6 className="h5_create" style={{ fontSize: 12 }}>&nbsp;&nbsp;  We create, make and serve fresho</h6>
                                </div>
                                <div className="menu2">
                                    <img className="img_align center" src={food_icon} style={{ height: 65, width: 65, float: 'left' }} />
                                    <h6 className="h5_price" style={{ float: 'right', color: '#2ecc71', fontSize: 12 }}>$20</h6>
                                    <h6 className="h5_menu" style={{ fontSize: 12 }}>&nbsp;&nbsp;   Menu Title Here</h6>
                                    &nbsp;&nbsp;<hr className="hr_margin" style={{ marginTop: '-25px', marginLeft: 75 }} />
                                    <h6 className="h5_create" style={{ fontSize: 12 }}>&nbsp;&nbsp;  We create, make and serve fresho</h6>
                                </div>
                            </div>
                            <div className="col-lg-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}