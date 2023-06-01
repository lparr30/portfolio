import './App.css';
import Header from './components/Header'
import Homepage from './components/Homepage';
import Picture from './components/Picture';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage/>
      <Picture />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
