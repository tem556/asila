import { useState } from 'react'
import {
  Routes, Route
} from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './components/InfoCard';
import NavBar from './components/NavBar';
import IntroText from './components/IntroText';
import SubjectDeck from './components/SubjectDeck';
import StatCard from './components/StatCard';
import Footer from './components/Footer';
import SubjectIntroText from './components/SubjectIntroText';

function App() {
  const grades = Array.from({ length: 12 }, (_, i) => i + 1);
  const subjectNumbers = Array.from({ length: 8 }, (_, i) => i + 1);
  const terms = ["A", "B"]

  const subjects = {
    1: "IslamicStudies", 2: "Arabic", 3: "Physics",
    4: "Chemistry", 5: "Biology", 6: "Mathematics",
    7: "English", 8: "IT"
  }

  const [grade, setGrade] = useState(12)
  const [term, setTerm] = useState(1)

  const Home = () => (
    <div>
      <InfoCard
        grade={grade}
        setGrade={setGrade}
        term={term}
        setTerm={setTerm}
      />

      <SubjectDeck
        grade={grade}
        term={terms[term - 1]}
      />
      <StatCard />
      <IntroText />
    </div>
  )

  const SubjectPage = ({gradeNumber, subjectNumber, termLetter}) => (
    <SubjectIntroText
      grade={gradeNumber}
      subject={subjectNumber}
      term={termLetter}
    />
  )

  return (
    <div className="App">
      <NavBar />
      <Routes>
        {grades.map((gradeNumber) => (
          subjectNumbers.map((subjectNumber) => (
            terms.map((termLetter) =>
              <Route
                key={gradeNumber + subjects[subjectNumber]}
                path={"/" + gradeNumber + "/" + termLetter + "/" + subjects[subjectNumber]}
                element={
                  <SubjectPage 
                    gradeNumber={gradeNumber} 
                    subjectNumber={subjectNumber} 
                    termLetter={termLetter}/>
                }
              />
            ))
          ))
        )}

        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;