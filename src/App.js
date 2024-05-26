import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignUp from './components/loginSignup/LoginSignUp';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginSignUp/>} />
        <Route path='/home' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
