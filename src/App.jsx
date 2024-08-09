import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './components/Card';
import NavBar from './components/NavBar';
import IntroText from './components/IntroText';
import SubjectDeck from './components/SubjectDeck';

function App() {
  return(
      <div className="App">
        <NavBar />
        <InfoCard />
        <SubjectDeck />
        <IntroText />
     </div>
  )
}

export default App;