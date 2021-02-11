import React, { useState } from 'react';
import './css/MainHero.css';
import screenshot from './images/homepage-screenshot.png'
import PillForm from './PillForm.js';
import Modal from 'react-modal';

function MainHero() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section id="main-hero">
            <div className="section section-main-hero">
                <div className="content">
                    <div className="main-text">
                        <h1 className="title main-hero-title">
                            Karbon is how you run your accounting firm.
                        </h1>
                        <p className="subtitle main-hero-subtitle">
                            Your firm's work, clients, planning, and communication, in one place - where it belongs.
                        </p>
                        <PillForm />
                    </div>

                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}  className="modal-video" >
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/W7KSFFSnmmA" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </Modal>

                    <img src={screenshot} onClick={openModal} id="main-hero-image" />
                 </div>
            </div>
        </section>
    )
}

export default MainHero; 