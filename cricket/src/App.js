import './App.css';
import MatchSummary from './Components/MatchSummary';
import Navbar from './Components/Navbar';
import Fantacy from './Pages/Fantacy';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Fantacy />
    </div>
  );
}

export default App;
