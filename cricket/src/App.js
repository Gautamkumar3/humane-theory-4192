import './App.css';
import Footer from './Components/Footer';
import MatchSummary from './Components/MatchSummary';
import Navbar from './Components/Navbar';
import Criclytics from './Pages/Criclytics';
import Fantacy from './Pages/Fantacy';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Fantacy />
      <Footer /> */}
      <Criclytics />
    </div>
  );
}

export default App;
