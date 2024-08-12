import {useState} from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './components/Card';
import NavBar from './components/NavBar';
import IntroText from './components/IntroText';
import SubjectDeck from './components/SubjectDeck';
import StatCard from './components/StatCard';
import Footer from './components/Footer';

function App() {
  const [grade, setGrade] = useState(12);
  const [term, setTerm] = useState(1);

  return(
      <div className="App">
        <NavBar />
        <InfoCard 
          grade={grade} 
          setGrade={setGrade}
          term={term}
          setTerm={setTerm}
          />
        <SubjectDeck />
        <StatCard />
        <IntroText />
        <Footer />
     </div>
  )
}

export default App;