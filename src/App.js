import logo from './logo.svg';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';


import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
      <Header/> 
    
    
      <Routes>
      <Route exact path ="/" element={<Home/>}/>
      </Routes>
    
       
      </Router>
       <Footer/> 
   
    </div>
  );
}

export default App;
