import React from 'react';
import './Home Pages/heading.css'
import Heading from './Home Pages/Heading';
import Nav from './Home Pages/Nav';
import Body from './Home Pages/Body';
import Footer from './Home Pages/Footer';

const Home = () => {
    return (
        <div>
            <Heading />
            <Nav />
            <Body />
            <Footer />
        </div>
    );
}

export default Home;
