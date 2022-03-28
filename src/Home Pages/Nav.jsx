import React, {useState} from 'react';
import Logo from '../imgs/Abstrakt logo White.png'
import './heading.css'
import { Link } from 'react-router-dom';
import Modal, { showModal, setShowModal }  from '../Components/Modal'


const Nav = () => {

    const [showModal, setShowModal] = useState(false);

    function openModal() {
    setShowModal(prev => !prev);
  }

    function scrollToTop(){
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className='nav__container container'>
            <div className="nav__row">
                <Link to="/" >
                    <img src={ Logo } alt="" className='Logo' onClick={scrollToTop}/>
                </Link>
                <div className="nav__links--wrapper">
                    <ul className='nav__links'>
                        <li className="nav__link">
                            <Link to="/services" onClick={scrollToTop}>Services</Link>
                        </li>
                        <li className="nav__link">
                            <p href="">Gallery</p>
                        </li>
                        <button className='contact__btn btn' onClick={() => setShowModal(true)}>Contact Us</button>
                    </ul>
                </div>
                <Modal />
            </div>
        </div>
    );
}

export default Nav;
