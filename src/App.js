import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className='main'>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Contact />
            </Route>

            <Route path='/projects'>
              <Projects />
            </Route>

            <Route path='/experience'>
              <Experience />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
    
  );
}

export default App;
