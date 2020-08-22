import React from 'react';
import { Router, Link } from '@reach/router';
import Detail from '../src/views/Detail'
import './App.css';
import Main from '../src/views/Main'
import Update from '../src/views/Update'
import Create from '../src/views/Create'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='players/' default/>
        <Detail path='players/:id'/>
        <Update path="players/:id/edit"/>
        <Create path='players/create'/>
      </Router>
    </div>
  );
}

export default App;
