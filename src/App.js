import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className='main'>
        <Sidebar />
        {/* <Contact /> */}
        <Projects />
        {/* <Experience /> */}
      </div>
    </>
  );
}

export default App;
