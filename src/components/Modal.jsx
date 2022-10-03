import React, { useState } from 'react';
import './modal.css'

const Modal = ({open,control}) => {
   
    return (
        <div className={open ? 'show' : 'container'}>
            <div className='main_container' onClick={control}>

            </div>
            <div className='modal_container'>
                <div>
                    <h1>Send Message</h1>
                </div>
                <div>
                    <button onClick={control}>Close</button>
                </div>

            </div>
        </div>
    );
};

export default Modal;