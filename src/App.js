import './App.css';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import GoHome from './components/GoHome/GoHome';

function App() {
  return (
    <div className="App">
      <NavBar />
       <Header />
        <div id="home">
          <Home name="/home" id="home" className="element">
            test 1
          </Home>
          <div id="skills">
            <Skills name="/skills" className="element">
              test 2
            </Skills>
          </div>
          <div id="projects">
            <Projects name="/projects" id="projects" className="element">
              test 3
            </Projects>
          </div>
          <div id="contact">
            <Contact name="/contact" className="element">
              test 4
            </Contact>
          </div>
          <GoHome />
        </div>
    </div>
  );
}

export default App;
