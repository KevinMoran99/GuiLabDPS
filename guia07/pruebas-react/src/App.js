import React from 'react';
import './App.css';
import Form from './components/Form';

const App = () => {
  return(
    <div className="App">
      <div className="App-content">
        <p>Aqui haremos nuestro TO-DO list</p>
        <Form/>
      </div>
    </div>
  );
}

export default App;