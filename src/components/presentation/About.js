import React from 'react';
import AboutCSS from '../../styles/About.module.css';
import StandType from './StandType';

const About = () => {
    return (
        <div className={AboutCSS.about}>
            <h2 className={AboutCSS.title}>About this project</h2>
            <p className={AboutCSS.content}>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing 
            your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the 
            task at hand.</p>
            <StandType title="Bamboo Stand"
                       pledge="Pledge $25 or more"
                       info="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                       />
            <StandType title="Black Edition Stand"
                       pledge="Pledge $75 or more"
                       info="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                       />
            <StandType title="Mahogany Special Edition"
                       pledge="Pledge $200 or more"
                       info="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                       />
        </div>
    )
}

export default About
