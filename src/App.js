import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './Home';
import Services from './Services';
import { useState } from 'react'
import Modal from './Components/Modal';

const App = () => {

const [showModal, setShowModal] = useState(false);


  return (
    <Router>
        <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
      </Routes>
      </div>
      { showModal && <Modal />}
    </Router>
  );
}

export default App;
