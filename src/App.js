import './App.css';
import HomePage from './components/HomePage';
import ReservationPage from './components/ReservationPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/reservations' element={<ReservationPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
