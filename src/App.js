import './App.css';
import Navbar from './components/Navbar.js';
import MainHero from './components/MainHero.js';
import ClientSection from './components/ClientSection.js';
import HomeDirectorySection from './components/HomeDirectorySection.js';
import HomeCards from './components/HomeCards.js';
import ResultsSection from './components/ResultsSection.js'
import Footer from './components/Footer.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <MainHero />
      <ClientSection />
      <HomeDirectorySection />
      <HomeCards />
      <ResultsSection />
      <Footer />
    </Router>
    </>
  );
}

export default App;
