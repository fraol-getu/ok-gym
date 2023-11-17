




import './App.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from './components/hero/Hero';
import Header from './components/header/Header';






import Home from './pages/Home';
import Aboutus from './pages/Aboutus';





import Fotter from './components/fotter/Fotter';
import Trainer from './pages/Trainer';
import Classe from './pages/Classe';
import Contacts from './pages/Contacts';
import Fraol from './pages/Fraol';




function App() {
  return (
    
     <div className='App'>
    
      <Router>
      <Header/>
     <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About us" element={<Aboutus/>} />
    <Route path="/Trainer" element={<Trainer/>} />
    <Route path="/Class" element={<Classe/>} />
    <Route path="/Contact" element={<Contacts/>} />
    <Route path="/*" element={<Fraol/>} />
</Routes>
    
    <Fotter/>
    </Router>
    
    </div>
  );
}

export default App;

