import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import requireAuth from './utils/requireAuth';


function App() {
  return (


  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={requireAuth({ children: <Dashboard /> })}>
      </Route>
    </Routes>
  </Router>
  )

}

export default App
