import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalNav from './components/navigation/nav-bar';
import ProjectForm from './pages/create-project';

function App() {
  return (
    <div className="App">


      <GlobalNav /> 
      <ProjectForm /> 

    </div>
  );
}

export default App;
