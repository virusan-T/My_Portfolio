import './App.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar';
import Hero from './sections/home';
import About from './sections/about';
import Academics from './sections/academic';
import Skills from './sections/skills';
import Projects from './sections/project';
import Contact from './sections/contact';
import ContactPage from './sections/contact-page';
import ScrollToHash from './ScrollToHash';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Academics />
            <Skills />
            <Projects />
            <Contact />
          </>
        } />

        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
