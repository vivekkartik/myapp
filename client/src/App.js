import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignUp from './components/loginSignup/LoginSignUp';
import Home from './components/pages/Home';
import Ai from './components/pages/Ai';
import About from './components/pages/About.jsx'
import Settings from './components/pages/Settings.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginSignUp/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/ai' element={<Ai />} />
        <Route path='/about' element={<About />  } />
        <Route path='settings' element={<Settings /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
