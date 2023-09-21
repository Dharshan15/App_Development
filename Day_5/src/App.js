import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginSignUp from './components/LoginSignUp';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignUp/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
