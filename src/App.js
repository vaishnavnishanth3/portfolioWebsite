import './App.css';
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import About from './components/about/About.jsx';
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/Skills.jsx"
import Projects from './components/projects/Projects.jsx';
import Certifications from './components/certifications/Certifications.jsx';
import Education from './components/education/Education.jsx';
import Contact from "./components/contact/Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
                <Router>
                    <div>
                        <Header />
                            <Routes>
                                <Route exact path="/" element={<Home />}/>
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={ <Contact />} />
                                <Route path="/skills" element={ <Skills/> } />
                                <Route path="/projects" element={ <Projects />} />
                                <Route path="/certifications" element={ <Certifications />} />
                                <Route path="/education" element={ <Education />} />
                            
                            </Routes>
                        <Footer />
                    </div>
                </Router>
        </div>
  );
}

export default App;
