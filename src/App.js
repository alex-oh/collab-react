import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalNav from './components/navigation/nav-bar';
import ProjectForm from './pages/create-project';
import APICards from './pages/api-finder';

function App() {
  return (
    <div className="App">


      <GlobalNav /> 
      <ProjectForm /> 
      {/* <APICards/> */}


    </div>
  );
}

export default App;
