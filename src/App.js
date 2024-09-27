import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main'
import Callback from './components/Loading/Callback'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/callback" element={<Callback />} />

      </Routes>
    </Router>
  );
}

export default App;
