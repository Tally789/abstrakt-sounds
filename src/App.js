import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './Home';
import Services from './Services';

function App() {
  return (
    <Router>
      <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
    </Routes>
      </div>
    </Router>
  );
}

export default App;
