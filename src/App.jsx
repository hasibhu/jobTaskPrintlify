
// import './App.css'
// import Hero from './LandingPageComponents/Hero'

// function App() {
  

//   return (
//     <div className='m-auto max-w-screen-lg'>

     

//       {/* Hero Section */}
//      <Hero></Hero>
      
//     </div>
//   )
// }

// export default App


import './App.css';
import AllProducts from './LandingPageComponents/AllProducts';
import Hero from './LandingPageComponents/Hero';
import Navbar from './LandingPageComponents/Navbar';
import Services from './LandingPageComponents/Services';
import TshirtCarousel from './LandingPageComponents/TshirtCarousel';
import TshirtPart from './LandingPageComponents/TshirtPart';

function App() {
  return (
    <div className='m-auto max-w-screen-2xl px-4'> {/* Adjusted container */}
      <Navbar></Navbar>
      {/* Hero Section */}
      <Hero />
      <Services></Services>
      <AllProducts></AllProducts>
      <TshirtPart></TshirtPart>
      <TshirtCarousel></TshirtCarousel>
    </div>
  );
}

export default App;
