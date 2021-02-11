import React from 'react';
import './css/ClientSection.css'
import img1 from './images/client-image-1.png';
import img2 from './images/client-image-2.png';
import img3 from './images/client-image-3.png';
import img4 from './images/client-image-4.png';
import img5 from './images/client-image-5.png';

const ClientSection = () => {

    return (
        <section id="clients" className="section section-clients">
            <div className="container container-clients">
                <p className="client-description">
                    Powering accounting firms worldwide
                </p>
                <div className="client-logos">
                    <img src={img1} id="JeffreysHenry" className="client-logo"/>
                    <img src={img2} id="Aprio" className="client-logo"/>
                    <img src={img3} id="Catalyst" className="client-logo"/>
                    <img src={img4} id="Armanino" className="client-logo"/>
                    <img src={img5} id="Viden" className="client-logo"/>
                </div>
            </div>
        </section>
    )
}

export default ClientSection;