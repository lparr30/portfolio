import './App.css';
import Header from './components/Header'
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/projectSection/Projects';
import Footer from './components/Footer';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage/>
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
