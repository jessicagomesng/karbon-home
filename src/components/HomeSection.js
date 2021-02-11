import React from 'react';
import { useInView } from 'react-intersection-observer'
import './css/HomeSection.css';

function HomeSection(props) {
    const [ ref, inView ] = useInView( { 
        threshold: 0.6,
    });

    return (
        <section id={props.tag} className={"section home-section " + props.tag}>
            <div className="home-section-text">
                <h6 className="subheading">{props.tag}</h6>
                <h2 className="home-section-title">{props.title}</h2>
                <p className="home-section-description">{props.desc}</p>
                <a href="/" className="learn-more">Learn more</a> 
                <div className="icons">
                    <div className="icon-one">
                        <img src={props.iconOne} className="icon-vector"/>
                        <p className="icon-caption">{props.descOne}</p>
                    </div>
                    <div className="icon-two">
                        <img src={props.iconTwo} className="icon-vector"/>
                        <p className="icon-caption">{props.descTwo}</p>
                    </div>
                    <div className="icon-three">
                        <img src={props.iconThree} className="icon-vector"/>
                        <p className="icon-caption">{props.descThree}</p>
                    </div>
                </div> 
            </div>
            <div className="home-section-images" ref={ref}>
                <img src={props.img} className="home-section-image"/>
                { inView ? (
                    <>
                    <img src={props.overlayOne} id={props.tag + "-overlay-one"} className="overlay appear" />
                    <img src={props.overlayTwo} id={props.tag + "-overlay-two"} className="overlay appear" />
                    </>
                ) : (
                    <>
                    <img src={props.overlayOne} id={props.tag + "-overlay-one"} className="overlay" />
                    <img src={props.overlayTwo} id={props.tag + "-overlay-two"} className="overlay"/>
                    </>
                )}

            </div>
    </section>
    )
}

export default HomeSection;