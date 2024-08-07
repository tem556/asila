import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './components/Card';
import NavBar from './components/NavBar';
import IntroText from './components/IntroText';

function App() {
  return(
      <div className="App">
        <NavBar />
        <InfoCard />
        <IntroText />
     </div>
  )
}

export default App;