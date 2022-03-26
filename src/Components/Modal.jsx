import React, { useRef } from 'react';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import './Modal.css'

export const Modal = ({ showModal, setShowModal }) => {

    const modalRef = useRef();

    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
      });
    

    return (
        <>
      {showModal ? (
          <animated.div style={animation}>
              <div className="modal__wrapper" showModal={showModal}>
                  <div className="modal__left">
                      <h1>YOoooo</h1>
                  </div>
                  <div className="modal__right">
                    <h1>Are you ready?</h1>
                    <p>Get exclusive access to our next launch.</p>
                    <button>Join Now</button>
                  </div>
                  <MdClose onClick={() => setShowModal(prev => !prev)} className="closeModalButton"/>
              </div>
          </animated.div>
      ) : null}
    </>
    );
}

export default Modal;
