import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import SearchInput from './Components/SearchInput';



function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <SearchInput />
    </div>
  );
}

export default App;
