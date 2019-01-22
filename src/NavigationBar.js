import React from 'react';
import ScrollspyNav from 'react-scrollspy-nav';

export class NavigationBar extends React.Component {

    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.handleScroll();
    }

    handleScroll() {
    //     window.onscroll = function () { myFunction() };

    //     var navbar = document.getElementById("navbar");
    //     var sticky = 92;
    // }

    // function myFunction() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky")
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    }

    render() {
        return (

            <div className="container-fluid" style={{ paddingLeft: 0}}>
                <nav className="navbar navbar-expand-lg sticky1">


                    <div className="navbar-header text-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false">
                            <i class="fa fa-bars" style={{ marginTop: 5 }}></i>
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
                                <li className="nav-item">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#menu">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#chef">Chef</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#reservation">Reservation</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#footer">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <button class="btn" type="submit">Reservation</button>
                                </li>
                            </ul>

                        </ScrollspyNav>

                    </div>




                </nav>
            </div>
        );
    }
}

