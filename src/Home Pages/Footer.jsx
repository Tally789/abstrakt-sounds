import React from 'react';
import './heading.css'
import Logo from '../imgs/Abstrakt logo White.png'
import { FaInstagram, FaFacebookSquare, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {

    function scrollToTop(){
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className='footer__container container'>
            <h2 className="footer__para">
                GET IN TOUCH LET'S HAVE A CHAT <br />
                WE CAN HELP YOU ORGANISE YOUR EVENT
            </h2>
            <button className="footer__button contact__btn btn">Enter Your Details</button>
            <div className="nav__links--wrapper">
                <ul className='nav__links'>
                    <li className="nav__link">
                    <Link to="/services" onClick={scrollToTop}>Services</Link>
                    </li>
                    <li className="nav__link">
                        <p href="">Gallery</p>
                    </li>
                </ul>
                <div className="social__media--links">
                    <a href="" className='social__media--link'><FaInstagram /></a>
                    <a href="" className='social__media--link'><FaFacebookSquare /></a>
                    <a href="" className='social__media--link'><FaTiktok /></a>
                </div>
            </div>
            <Link to="/">
                <img src={Logo} alt="" className='Logo__footer Logo' onClick={scrollToTop} />
            </Link>
        </div>
    );
}

export default Footer;
