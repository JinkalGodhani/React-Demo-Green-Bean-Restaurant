import React from 'react';

export class InfoPage extends React.Component{
    render() {
        return(
            <div className="info-page" style={{backgroundColor: '#2ECC71'}}>
                <div className="container">

                    <h6 className="ul_1">
                        <ul className="icon-types">
                            <li>
                                <a href="#">
                                    <i class="fa fa-phone" aria-hidden="true"></i> 01778235029 | 
                                </a>
                            </li>
                            <li><a href="#"><i class="far fa-envelope"></i> mahedi_cse@hotmail.com</a></li>
                        </ul>
                    </h6>
                
                    <h6 className="ul_2">
                        <ul className="icon-types">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            <li>|</li>
                            <li><a href="#"><i class="fas fa-shopping-bag"></i></a></li>
                        </ul>
                    </h6>
                </div>
            </div>
        );
    }
}


