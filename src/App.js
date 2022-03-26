import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './Home';
import Services from './Services';
import { useState } from 'react'
import Modal from './Components/Modal';

function App() {

const [showModal, setShowModal] = useState(false);

  return (
    <Router>
        <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
      </Routes>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
    </Router>
  );
}

export default App;
