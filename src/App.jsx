import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
// import ParticalsBackground from "./components/ParticalsBackground";
import CustomCursor from "./components/CustomCursor";


export default function App() {
  return (
    <div className="gradient relative text-white">
      <CustomCursor/>
      {/* <ParticalsBackground/> */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
