import React from 'react';
import './Home.css';
import Logo from "../../images/Urban-Trace-Logo.png";
import UrbanTraceText from "../../images/Urban-Trace-Text.png";

const Home = () => {
        return (
            <div className='Home'>
                <img alt='' src={Logo}></img>
                <img alt='' src={UrbanTraceText}></img>
            </div>
        );
}

export default Home;