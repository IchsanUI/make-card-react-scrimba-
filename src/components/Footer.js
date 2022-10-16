import React from 'react';
import logo1 from '../Assets/Facebook Icon.png'
import logo2 from '../Assets/Twitter Icon.png'
import logo3 from '../Assets/GitHub Icon.png'
import logo4 from '../Assets/Instagram Icon.png'


function Footer() {
    return ( 
            <div className='FooterElement'>
                <img src={logo1}/>
                <img src={logo2}/>
                <img src={logo3}/>
                <img src={logo4}/>
            </div>

    );
}

export default Footer;