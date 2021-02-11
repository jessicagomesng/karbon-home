import React from 'react';
import HomeSection from './HomeSection';
import './css/HomeCards.css';
import { useInView } from 'react-intersection-observer';
import BwOne from './images/bw-img-1.png';
import BwTwo from'./images/bw-img-2.png';
import BwThree from './images/bw-img-3.png';
import accuracy from './images/accuracy.png';
import resources from './images/resources.png';
import relationships from './images/relationships.png';
import template from './images/template.png';
import recurring from './images/recurring.png';
import automate from './images/automate.png';
import communication from './images/communication.png';
import collaborate from './images/collaborate.png';
import assign from './images/assign.png';
import workflow1 from './images/workflow1.png';
import workflow2 from './images/workflow2.png';
import workflow3 from './images/workflow3.png';
import workflow4 from './images/workflow4.png';
import workflow5 from './images/workflow5.png';
import workflow6 from './images/workflow6.png';

function HomeCards(props) {

    return (
        <div className="home-cards">
            <HomeSection img={BwOne} overlayOne={workflow1} overlayTwo={workflow2} tag="Visibility" title="360-Degree Visibility" desc="Your firm like you’ve never seen it. Know where every job stands, who is working what, what is being said to your clients. No blind spots. Nothing falls through the cracks." iconOne={accuracy} descOne="Plan with accuracy" iconTwo={resources} descTwo="Allocate resources" iconThree={relationships} descThree="Understand client relationships"/>
            <HomeSection img={BwTwo} overlayOne={workflow3} overlayTwo={workflow4} tag="Efficiency" title="Intelligent Workflows" desc="Deliver high-quality services efficiently. Automate tasks, standardize common processes, schedule data collection and scale onboarding. Get more out of every team member." iconOne={template} descOne="Template processes" iconTwo={automate} descTwo="Automate tasks" iconThree={recurring} descThree="Schedule recurring work"/>
            <HomeSection img={BwThree} overlayOne={workflow6} overlayTwo={workflow5} tag="Collaboration" title="Empowered Teams" desc="Unite your firm with one place to collaborate on email, clients, jobs and tasks. Everything your team needs to get work done together—whether they’re remote or in the office." iconOne={communication} descOne="Centralize communication" iconTwo={collaborate} descTwo="Collaborate on work" iconThree={assign} descThree="Assign tasks" />
        </div>
    )
}

export default HomeCards;