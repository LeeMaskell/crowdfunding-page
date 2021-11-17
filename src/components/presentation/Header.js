import React from 'react';
import HeaderCSS from '../../styles/Header.module.css';

const Header = () => {
    return (
        <div className={HeaderCSS.header} style={{backgroundImage: `url('/assets/image-hero-desktop.jpg')`, backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center', backgroundSize: 'cover', height: '400px'}}>
            <h1 className={HeaderCSS.title}>crowdfund</h1>
            <ul className={HeaderCSS.navMenu}>
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
            </ul>
        </div>
    )
}

export default Header


