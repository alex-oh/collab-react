import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalNav from './components/navigation/nav-bar';
import ProjectForm from './pages/create-project';
import APICards from './pages/api-finder';
import ProjectDetails from './pages/project-details'
import APIDetails from './pages/api-details'

function App() {

  const projectData = {
    name: 'Sample Project',
    createDate: '2023-08-01',
    startDate: '2023-08-05',
    owner: 'John Doe',
    category: 'Web Development',
    completion: 70,
    description: 'This is a sample project for web development using React and Bootstrap.'
  };


  return (
    
    <div className="App">

    
      <GlobalNav /> 
      {/* <ProjectForm />  */}
      {/* <ProjectDetails/> */}
      {/* <APICards/> */}
      <APIDetails/>



    </div>
  );
}

export default App;
