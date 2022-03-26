
import React from 'react';
import  { Parallax }  from 'react-parallax'
import { Link } from 'react-router-dom';
import image1 from '../imgs/Image-1.jpeg'
import image2 from '../imgs/Image-2.jpeg'
import image3 from '../imgs/Image-4.jpeg'
import './heading.css'

const inlineStyle = {
    height: '450px',
    width: '700px',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
    border: 'solid 2px #267871'
  }

const Body = () => {

    function scrollToTop(){
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className='container'>
            <Parallax bgImage={ image3 } strength={500} className='parallax__div'>
                <div style={{ height: 700 }}>
                    <div className="parallax__text" style={inlineStyle}>
                    <h1 className="landing__title">High End International DJS</h1>
                    <p className="landing__para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam neque minus sint vero illo fugit error, iure voluptates nam enim maxime deleniti dicta repellat doloremque commodi eligendi? Voluptas, ad unde.</p>
                    <Link to="/services">
                    <button className="find__out__more btn" onClick={scrollToTop}>Learn More
                    </button>
                    </Link>
                    </div>
                </div>
            </Parallax>
            <Parallax bgImage={ image1 } strength={500} className='parallax__div'>
                <div style={{ height: 700 }}>
                <div className="parallax__text" style={inlineStyle}>
                    <h1 className="landing__title">Bespoke Stage Designs</h1>
                    <p className="landing__para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam neque minus sint vero illo fugit error, iure voluptates nam enim maxime deleniti dicta repellat doloremque commodi eligendi? Voluptas, ad unde.</p>
                    <button className="find__out__more btn">Learn More
                    </button>
                    </div>
                </div>
            </Parallax>
            <Parallax bgImage={ image2 } strength={500}>
                <div style={{ height: 700 }}>
                <div className="parallax__text" style={inlineStyle}>
                    <h1 className="landing__title">Create Amazing Memories</h1>
                    <p className="landing__para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam neque minus sint vero illo fugit error, iure voluptates nam enim maxime deleniti dicta repellat doloremque commodi eligendi? Voluptas, ad unde.</p>
                    <button className="contact__btn btn">Contact Us
                    </button>
                    </div>
                </div>
            </Parallax>
        </div >
    );
}

export default Body;
