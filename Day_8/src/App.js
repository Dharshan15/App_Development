import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignUp from './components/LoginSignUp';
import Home from './components/Home';
import TeamMembers from './components/TeamMembers';
import Projects from './components/Projects';
import Faq from './components/Faq';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

// import Profile from './components/Profile';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignUp />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/members' element={<TeamMembers  />} />
          <Route path='/project' element={<Projects  />} />
          <Route path='/faq' element={<Faq  />} />
          <Route path='/privacy' element={<Privacy  />} />
          <Route path='/tandc' element={<Terms  />} />
          {/* <Route path='/profile' element={<Profile  />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
