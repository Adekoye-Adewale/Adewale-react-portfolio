import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className='main'>
        <Sidebar />
        <Contact />
        {/* <Projects /> */}
      </div>
    </>
  );
}

export default App;
