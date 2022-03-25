import React from 'react';
import "./heading.css" 
import mainVid from '../imgs/AS_custom_setup.mp4'

const Heading = () => {

    return (
        <div className='heading__container container'>
            <video className='videoTag' autoPlay loop muted>
            <source src={mainVid} type='video/mp4' className='video'/>
            </video>
        </div>
    );
}

export default Heading;
