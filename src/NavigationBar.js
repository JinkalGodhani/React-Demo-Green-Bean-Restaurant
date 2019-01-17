import React from 'react';

export class NavigationBar extends React.Component {
    render() {
        return(
            
            <div className="container">
                <nav class="navbar navbar-expand-lg ">
                    <a class="navbar-brand font_fam" href="#" style={{color: '#2ECC71', marginTop: 0}}>Green Bean</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style={{backgroundColor:'black', marginTop: 25}}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#menu">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#blog">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#chef">Chef</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#reservation">Reservation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">Contact</a>
                            </li>
                            <li class="nav-item">
                            <button class="btn" type="submit">Reservation</button>
                            </li>
                        </ul>
                    </div>  
                </nav>

            </div>
        );
    } 
}
    
    