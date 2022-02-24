import React from 'react'
import './App.css';
const URL = "https://docs.google.com/document/d/1L9MZmYKmicqTZYUdnbENNEIeYvgLcAvw/edit"
function App() {
  return (
    <div className="App">
      <h1>Hi I am Fatimah</h1>
      <a href = {URL} ><button>Resume</button></a>
    </div>
  );
}

export default App;
