import Blog from "./components/Blog";
import Services from "./components/Services";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Capabilities from "./components/Capabilities";
import Footer from "./components/Footer";
import Page404 from "./components/Page404";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Blog/>
      <Portfolio/>
      <Testimonial/>
      <Capabilities/>
      <Contact/>
      <Page404/>
      <Footer/>
    </>
  );
}

export default App;
