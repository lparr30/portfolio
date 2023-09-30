import './App.css';
import Header from './components/Header'
// import Homepage from './components/Homepage';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/projectSection/Projects';
import { useState } from 'react';
// import Footer from './components/Footer';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}



function App() {

  const [contactClick, setContactClick] = useState(false);
  const contactMe = () => {
    setContactClick(!contactClick);
  };

  return (
    <div className="App">
      <Header contactMe={contactMe} />
      {/* <Homepage/> */}
      <Landing />
      <AboutMe />
      <Projects />
      <Contact contactClick={contactClick}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
