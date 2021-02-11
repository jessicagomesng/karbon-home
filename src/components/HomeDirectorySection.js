import React, { useState } from 'react';
import './css/HomeDirectorySection.css'

const HomeDirectorySection = () => {

    const [ current, setCurrent ] = useState('Visibility')

    return (
        <section id="home-directory" className="section section-home-directory">
            <div class="container container-directory">
                <h3 class="directory-text">
                    The digital workspace for the work-from-anywhere accounting firm
                </h3>
                <div class="directory-links">
                    { current === 'Visibility' ? (
                        <div className="directory-link current-active">
                            <a href="#Visibility" onClick={ () => setCurrent('Visibility') } >Visibility</a>
                        </div>
                    ) : (
                        <div className="directory-link">
                            <a href="#Visibility" onClick={ () => setCurrent('Visibility') } >Visibility</a>
                        </div>
                    )}
                    { current === 'Efficiency' ? (
                        <div className="directory-link current-active">
                            <a href="#Efficiency" onClick={ () => setCurrent('Efficiency') } >Efficiency</a>
                        </div>
                    ) : (
                        <div className="directory-link">
                            <a href="#Efficiency" onClick={ () => setCurrent('Efficiency') } >Efficiency</a>
                        </div>
                    )}
                    { current === 'Collaboration' ? (
                        <div className="directory-link current-active">
                            <a href="#Collaboration" onClick={ () => setCurrent('Collaboration') } >Collaboration</a>
                        </div>
                    ) : (
                        <div className="directory-link">
                            <a href="#Collaboration" onClick={ () => setCurrent('Collaboration') } >Collaboration</a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default HomeDirectorySection;