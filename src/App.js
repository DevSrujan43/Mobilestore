import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Store />
      <Footer />
    </div>
  );
}

export default App;
