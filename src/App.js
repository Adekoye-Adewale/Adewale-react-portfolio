import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './components/Menu';
import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='main'>
          <Sidebar />
          <Menu />
          <Routes>

            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />    

            {/* <Route exact path='/contact'>
              <Contact />
            </Route>

            <Route path='/projects'>
              <Projects />
            </Route>

            <Route path='/experience'>
              <Experience />
            </Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
    
  );
}

export default App;
