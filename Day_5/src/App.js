import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginSignUp from './components/LoginSignUp';
import Home from './components/Home';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignUp/>}></Route>
          <Route path='/dashboard' element={<Home/>}></Route>
          <Route path='/task' element={<Task/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
