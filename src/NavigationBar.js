import React from 'react';

export class NavigationBar extends React.Component {
    render() {
        return(
            
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false">
                            <i class="fa fa-bars" style={{marginTop: 5}}></i>
                        </button>
                        <a className="navbar-brand font_fam" href="#" style={{color: '#2ecc71', marginTop: 0, float:'left'}}>Green Bean</a>
                    </div>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav" style={{margin: '0 auto'}}>
                        <li className="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#chef">Chef</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#reservation">Reservation</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#footer">Contact</a>
                        </li>
                        <li className="nav-item">
                        <button class="btn" type="submit">Reservation</button>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    } 
}
    
    