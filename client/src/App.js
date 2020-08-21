import React from 'react';
import { Router } from '@reach/router';
import Detail from '../src/views/Detail'
import './App.css';
import Main from '../src/views/Main'
import Update from '../src/views/Update'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='authors/' default/>
        <Detail path='authors/:id'/>
        <Update path="authors/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
