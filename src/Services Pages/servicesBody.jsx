import React from 'react';
import './servicePage.css'
import image1 from '../imgs/Image-1.jpeg'

const Servicesbody = () => {
    return (
        <>
        <div className='container__services container'>
            <div className="service__row row1">
                    <h1 className="service__title">
                        World Class Superstar Top 1 DJ Init
                    </h1>
                <div className="service__text">
                    <div className="service__img" >
                        <img src="https://images.unsplash.com/photo-1571266028243-d220c6a7edbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='img'/>
                    </div>
                    <p className="service__para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni laudantium sit quidem explicabo minus laborum voluptatem odio voluptatibus nulla officiis dolorem vitae optio quibusdam porro deserunt, autem officia, alias atque.
                    </p>
                </div>
            </div>
            <div className="service__row row2">
                <h1 className="service__title">
                        Lighting Production & Special Effects
                </h1>
                <div className="service__text">
                    <div className="service__img" >
                    <img src="https://images.unsplash.com/photo-1576514129883-2f1d47a65da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHRpbmclMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" className='img'/>
                    </div>
                    <p className="service__para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni laudantium sit quidem explicabo minus laborum voluptatem odio voluptatibus nulla officiis dolorem vitae optio quibusdam porro deserunt, autem officia, alias atque.
                    </p>
                </div>
            </div>
            <div className="service__row row3">
                <h1 className="service__title">
                        Bespoke Dancefloors & Stage Design
                </h1>
                <div className="service__text">
                    <div className="service__img" >
                    <img src={ image1 }alt="" className='img'/>
                    </div>
                    <p className="service__para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni laudantium sit quidem explicabo minus laborum voluptatem odio voluptatibus nulla officiis dolorem vitae optio quibusdam porro deserunt, autem officia, alias atque.
                    </p>
                </div>
            </div>
            <div className="service__row row4">
                <h1 className="service__title">
                        Destination Weddings
                </h1>
                <div className="service__text">
                    <div className="service__img" >
                    <img src="https://images.unsplash.com/photo-1583878545126-2f1ca0142714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzdGluYXRpb24lMjB3ZWRkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" className='img'/>
                    </div>
                    <p className="service__para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni laudantium sit quidem explicabo minus laborum voluptatem odio voluptatibus nulla officiis dolorem vitae optio quibusdam porro deserunt, autem officia, alias atque.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Servicesbody;
