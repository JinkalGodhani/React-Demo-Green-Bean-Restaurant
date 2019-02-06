import React from 'react';
import ScrollspyNav from 'react-scrollspy-nav';

export class NavigationBar extends React.Component {

    constructor() {
        super();
        this.state = {
            scrollclass: 'sticky-nav-blur',
            color: 'rgba(82, 86, 89, 0.7)'
        };
    }

    listenScrollEvent = e => {
        if (window.pageYOffset > 10) {
            this.setState({ scrollclass: 'sticky-nav' })
        } else {
            this.setState({ scrollclass: 'sticky-nav-blur' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (

            <div className={"container-fluid " + this.state.scrollclass} style={{ paddingLeft: 0, backgroundColor: 'white' }}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand font_fam" href="#" style={{ color: '#2ecc71', marginTop: 0, float: 'left' }}>Green Bean</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ScrollspyNav
                            scrollTargetIds={["home", "about", "menu", "blog", "pages", "reservation", "footer", "nocolor", "nocolor2"]}
                            activeNavClass="is-active"
                            scrollDuration="100"
                            headerBackground="true"
                        >

                            <ul className="navbar-nav text-center" style={{ margin: '0 auto' }}>
                                <li className="dropdown hover_effect">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#home">Home</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#home">Lorem</a></li>
                                        <li><a href="#home">Lorem</a></li>
                                        <li><a href="#home">Lorem</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown hover_effect">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#about">About</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#about">Lorem</a></li>
                                        <li><a href="#about">Lorem</a></li>
                                        <li><a href="#about">Lorem</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown hover_effect">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#menu">Menu</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#menu">Lorem</a></li>
                                        <li><a href="#menu">Lorem</a></li>
                                        <li><a href="#menu">Lorem</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown hover_effect">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#blog">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#blog">Lorem</a></li>
                                        <li><a href="#blog">Lorem</a></li>
                                        <li><a href="#blog">Lorem</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown hover_effect">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#pages">Pages</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#chef">Lorem</a></li>
                                        <li><a href="#chef">Lorem</a></li>
                                        <li><a href="#chef">Lorem</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item hover_effect">
                                    <a href="#reservation">Reservation</a>
                                </li>
                                <li className="nav-item hover_effect">
                                    <a href="#footer">Contact</a>
                                </li>
                                <li className="nav-item hover_effect">
                                    <a href="#nocolor" style={{display: 'none'}}>No Color-1</a>
                                </li>
                                <li className="nav-item hover_effect">
                                    <a href="#nocolor2" style={{display: 'none'}}>No Color-2</a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn" type="submit" style={{ marginTop: -8 }}>Reservation</button>
                                </li>
                            </ul>

                        </ScrollspyNav>


                    </div>
                </nav>
                </div>
            </div>
        );
    }
}

