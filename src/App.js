
import './App.css';
import {Link, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import SignUp from './components/SignUp';


function App() {
  return (
    <div>
      <nav>
        <Link id='icon' to='/'><h1>Name</h1></Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </nav>

      <Routes>
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
