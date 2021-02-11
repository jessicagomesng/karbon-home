import React from 'react';
import './css/ResultsSection.css'
import SystemSix from './images/System-Six.png';
import Envolta from './images/Envolta.png';

const ResultsSection = () => {

    return (
        <section id="results" className="section section-results">
            <div className="results-text">
                <h6 className="subheading">Results</h6>
                <h2 className="results-title">21% increase in productivity</h2>
                <p className="results-description">On average, per employee. Based on real results from the Karbon Customer Survey 2020.</p>
            </div>
            <div className="testimonials">
                <div className="client-testimonial">
                    <div className="quotation">
                        <p className="quotation-mark">“</p>
                        <p className="quotation-text">Karbon is our rocket booster that's allowing us to grow at 40% to 50% year over year.</p>
                    </div>
                    <div className="client-name">
                        <img src={SystemSix} className="client-image"/>
                        <div className="client-info">
                            <strong>Jeremy Allen</strong>
                            <p>System Six</p>
                        </div>
                    </div>
                </div>
                <div className="client-testimonial">
                    <div className="quotation">
                        <p className="quotation-mark">“</p>
                        <p className="quotation-text">Every accounting firm should be using Karbon. It's the cornerstone of our business.</p>
                    </div>
                    <div className="client-name">
                        <img src={Envolta} className="client-image"/>
                        <div className="client-info">
                            <strong>David DiNardo</strong>
                            <p>Envolta</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResultsSection;