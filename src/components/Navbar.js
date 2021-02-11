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
                <div className="nav-subMenu"><span>Product</span>
                    {/* <div className="subMenu-toggler">
                        <div className="subMenu-container subMenu-container-product">
                            <div className="subMenu-col subMenu-product-col-1">
                                <h4 className="subMenu-title">Solutions</h4>
                                <a className="subMenu-link" href="/accounting">
                                <strong>How Karbon helps your accounting firm</strong>
                                <small>Align your firm with a single place to communicate and collaborate on work.</small>
                                <span class="expand-link">Learn more</span>
                                </a>
                                <a className="subMenu-link" href="/plan-work">Plan Work</a>
                                <a className="subMenu-link" href="/deliver-work">Deliver Work</a>
                                <a className="subMenu-link" href="/optimize-work">Optimize Work</a>
                            </div>
                            <div className="subMenu-col subMenu-product-col-2">
                                <h4 className="subMenu-title">Tour</h4>
                                <a className="subMenu-link" href="/workflow-automation">Workflow Automation</a>
                                <a className="subMenu-link" href="/project-management">Project Management</a>
                                <a className="subMenu-link" href="/team-collaboration">Team Collaboration</a>
                                <a className="subMenu-link" href="/client-management">Client Management</a>
                                <a className="subMenu-link" href="/performance-analytics">Performance Analytics</a>
                                <a className="subMenu-link" href="/centralized-knowledge">Centralized Knowledge</a>
                            </div>
                            <div className="subMenu-col subMenu-product-col-3">
                                <h4 className="subMenu-title">Tech</h4>
                                <a className="subMenu-link" href="/security">Security</a>
                                <a className="subMenu-link" href="/integrated-ecosystem">Integration</a>
                                <a className="subMenu-link" href="/enterprise">Enterprise</a>
                            </div>
                        </div>
                    </div> */}
                </div>
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