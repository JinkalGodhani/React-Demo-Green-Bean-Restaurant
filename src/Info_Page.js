import React from 'react';

export class Info_Page extends React.Component {
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: '#2ecc71' }}>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="no_float">
                                <a href="#" style={{ float: 'left', color: 'white' }}><i className="fa fa-phone" aria-hidden="true"></i> 01778235029&nbsp;&nbsp;| </a>
                                <a href="#" style={{ float: 'left', color: 'white' }}>&nbsp;&nbsp;<i className="far fa-envelope"></i> mahedi_cse@hotmail.com &nbsp;&nbsp;</a>
                            </div>
                            <a className="align_icons_appear" href="#" style={{ display: 'none', color: 'white' }}><i className="fas fa-shopping-bag"></i></a>
                            <a className="align_icons_appear" href="#" style={{ display: 'none', color: 'white' }}><i className="fab fa-youtube">&nbsp;&nbsp;|&nbsp;&nbsp;</i></a>
                            <a className="align_icons_appear" href="#" style={{ display: 'none', color: 'white' }}><i className="fab fa-linkedin">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>
                            <a className="align_icons_appear" href="#" style={{ display: 'none', color: 'white' }}><i className="fab fa-twitter">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>
                            <a className="align_icons_appear" href="#" style={{ display: 'none', color: 'white' }}><i className="fab fa-facebook-f">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>
                        </div>
                        <div className="col-lg-6">
                            <a className="align_icons_disappear" href="#" style={{ float: 'right', color: 'white' }}><i className="fas fa-shopping-bag"></i></a>
                            <a className="align_icons_disappear" href="#" style={{ float: 'right', color: 'white' }}><i className="fab fa-youtube">&nbsp;&nbsp;|&nbsp;&nbsp;</i></a>
                            <a className="align_icons_disappear" href="#" style={{ float: 'right', color: 'white' }}><i className="fab fa-linkedin">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>
                            <a className="align_icons_disappear" href="#" style={{ float: 'right', color: 'white' }}><i className="fab fa-twitter">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>
                            <a className="align_icons_disappear" href="#" style={{ float: 'right', color: 'white' }}><i className="fab fa-facebook-f">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>

                            <a className="align_icons_disappear1" href="#" style={{ display: 'none', color: 'white' }}><i className="fab fa-facebook-f">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>
                            <a className="align_icons_disappear1" href="#" style={{ display: 'none', color: 'white' }}><i className="fab fa-twitter">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>
                            <a className="align_icons_disappear1" href="#" style={{ display: 'none', color: 'white' }}><i className="fab fa-linkedin">&nbsp;&nbsp;&nbsp;&nbsp;</i></a>
                            <a className="align_icons_disappear1" href="#" style={{ display: 'none', color: 'white' }}><i className="fab fa-youtube">&nbsp;&nbsp;|&nbsp;&nbsp;</i></a>
                            <a className="align_icons_disappear1" href="#" style={{ display: 'none', color: 'white' }}><i className="fas fa-shopping-bag"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

