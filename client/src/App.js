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
        <Main path='products/' default/>
        <Detail path='products/:id'/>
        <Update path="products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
