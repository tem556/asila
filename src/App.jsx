import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './components/InfoCard';
import NavBar from './components/NavBar';
import IntroText from './components/IntroText';
import SubjectDeck from './components/SubjectDeck';
import StatCard from './components/StatCard';
import Footer from './components/Footer';

function App() {
  const [grade, setGrade] = useState(12);
  const [term, setTerm] = useState(1);

  const Home = () => (
    <div>
      <InfoCard
        grade={grade}
        setGrade={setGrade}
        term={term}
        setTerm={setTerm}
      />
      <SubjectDeck />
      <StatCard />
      <IntroText />
    </div>
  )

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/notes" element={<StatCard />} />
          <Route path="/users" element={<div>test</div>} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;