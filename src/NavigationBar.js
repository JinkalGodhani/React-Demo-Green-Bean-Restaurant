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
                <nav className="navbar navbar-expand-lg">


                    <div className="navbar-header text-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Hello</span>
                            <span class="fa fa-bars" style={{ marginTop: 5 }}></span>
                        </button>
                        <a className="navbar-brand font_fam" href="#" style={{ color: '#2ecc71', marginTop: 0, float: 'left' }}>Green Bean</a>
                    </div>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ScrollspyNav
                            scrollTargetIds={["home", "about", "menu", "blog", "chef", "reservation", "footer"]}
                            activeNavClass="is-active"
                            scrollDuration="100"
                            headerBackground="true"
                        >

                            <ul className="navbar-nav text-center" style={{ margin: '0 auto' }}>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#home">Home</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#home">Lorem</a></li>
                                        <li><a href="#home">Lorem</a></li>
                                        <li><a href="#home">Lorem</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#about">About</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#about">Lorem</a></li>
                                        <li><a href="#about">Lorem</a></li>
                                        <li><a href="#about">Lorem</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#menu">Menu</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#menu">Lorem</a></li>
                                        <li><a href="#menu">Lorem</a></li>
                                        <li><a href="#menu">Lorem</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#blog">Blog</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#blog">Lorem</a></li>
                                        <li><a href="#blog">Lorem</a></li>
                                        <li><a href="#blog">Lorem</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#chef">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#chef">Lorem</a></li>
                                        <li><a href="#chef">Lorem</a></li>
                                        <li><a href="#chef">Lorem</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#reservation">Reservation</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#footer">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <button class="btn" type="submit" style={{marginTop: -8}}>Reservation</button>
                                </li>
                            </ul>

                        </ScrollspyNav>

                    </div>
                </nav>
            </div>
        );
    }
}

