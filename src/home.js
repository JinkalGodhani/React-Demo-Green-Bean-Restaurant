import React from 'react';
import { InfoPage } from './InfoPage';
import { NavigationBar } from './NavigationBar';
import { ImageCarousel1 } from './ImageCarousel1';
import { About } from './About';
import { Reservation } from './Reservation';
import { Menu } from './Menu';
import { Menu2 } from './Menu2';
import { Chef } from './Chef';
import { TextCarousel } from './TextCarousel';
import { Blog } from './Blog';
import { Footer } from './Footer';
import { Copyright } from './Copyright';

export class Home extends React.Component{
    render() {
        return(
            <div className="container-fluid" id ="home" style={{paddingTop: 40}} data-spy="scroll" data-target=".navbar" data-offset="50">
               
                <InfoPage />
                <NavigationBar />
                <ImageCarousel1 />
                <About />
                <Reservation />
                <Menu />
                <Menu2 />
                <Chef />
                <Blog />
                <TextCarousel />
                <Footer />
                <Copyright />
            </div>
        );
    }
}