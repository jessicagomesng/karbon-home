import React, { useState } from 'react';
import './css/Navbar.css';
import mainLogo from './images/karbon-logo.svg';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import PillForm from './PillForm.js'

function NavBar() {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <>
        <header>
            <div className="navbar-container">
                <a aria-current="page" href="/">
                    <img width="121" height="42" alt="Karbon" title="Karbon Logo" src={mainLogo} />
                </a>
            </div>
            <nav className="navbar">
                <div className="nav-subMenu"><span>Product</span></div>
                <Link to="/services" className="MenuLink">Services</Link>
                <div className="nav-subMenu"><span>Resources</span></div>
                <Link to="/pricing" className="MenuLink">Pricing</Link>
            </nav>
            <div className="buttons">
                <span className="button button-get-started" onClick={() => setIsOpen(true)} >Get Started</span>
                <a href="https://app.karbonhq.com" color="darkGrey" className="button button-login">Login</a>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} className="modal-form" >
                <>
                    <div className="modal-form-heading">
                        <h3 class="title modal-title">Enter your <span className="font-change">work email</span><br /> address to get started</h3>
                    </div>
                    <PillForm />
                </>
            </Modal>

        </header>
        </>
    )
}

export default NavBar; 