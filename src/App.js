import logo from './logo.svg';
import './App.css';
import Navbar from './components/layouts/Navbar';
// import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Features from './components/pages/Features';
import Pricing from './components/pages/Pricing';
import Footer from './components/layouts/Footer';
import Copyright from './components/layouts/Copyright';


import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
     
    
    
      <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route path ="/aboutus" element={<AboutUs/>}/>
      <Route path ="/features" element={<Features/>}/>
      <Route path ="/pricing" element={<Pricing/>}/>
      </Routes>
    
       
      </Router>
       <Footer/> 
       <Copyright/>
   
    </div>
  );
}

export default App;
