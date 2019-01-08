import React from 'react';
import { InfoPage } from './InfoPage';
import { NavigationBar } from './NavigationBar';
import { ImageCarousel1 } from './ImageCarousel1';
import { About } from './About';
import { Reservation } from './Reservation';
import { Menu } from './Menu';

export class Home extends React.Component{
    render() {
        return(
            <div className="container-fluid" style={{padding: 40}}>
               
                <InfoPage />
                <NavigationBar />
                <ImageCarousel1 />
                <About />
                <Reservation />
                <Menu />
            </div>
        );
    }
}