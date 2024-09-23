

import './App.css';
import AllProducts from './LandingPageComponents/AllProducts';

import Hero from './LandingPageComponents/Hero';
import Navbar from './LandingPageComponents/Navbar';
import Services from './LandingPageComponents/Services';
import TshirtCarousel from './LandingPageComponents/TshirtCarousel';
import TshirtPart from './LandingPageComponents/TshirtPart';
import ImportantLinks from './LandingPageComponents/ImportantLinks';
import Footer from './LandingPageComponents/Footer';

function App() {
  return (
    <div>
      <div className='m-auto max-w-screen-2xl px-4'> {/* Adjusted container */}
      <Navbar></Navbar>
      {/* Hero Section */}
      <Hero />
      <Services></Services>
      <AllProducts></AllProducts>
      <TshirtPart></TshirtPart>
      <TshirtCarousel></TshirtCarousel>
      <ImportantLinks></ImportantLinks>
    </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
