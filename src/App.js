import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainBody from './components/mainbody'

function App() {
  return (
    <div className="App">
     <Navbar />
     <MainBody />
     <Footer />
    </div>
  );
}

export default App;
