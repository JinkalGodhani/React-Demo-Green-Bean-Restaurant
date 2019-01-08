import React from 'react';

export class NavigationBar extends React.Component {
    render() {
        return(
            
            <div className="container">
                <nav class="navbar navbar-expand-lg" style={{display: 'inline-block'}}>
  
                    <a class="navbar-brand" href="#" style={{color: '#2ECC71'}}>Green Bean</a>
  

                    <ul class="navbar-nav" style={{float: 'right'}}>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Menu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Reservation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                        <button class="btn" type="submit">Reservation</button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
    
    