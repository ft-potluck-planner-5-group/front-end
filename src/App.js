
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/Header';
// import Home from './components/Home';
// import Login from './components/Login';
import Products from './components/Products';

function App() {
  return (
  <Router>
    <Header />
    <Routes>
        {/* <Route exact path="/" component={Home}/> */}
        {/* <Route path="/login" component={Login} /> */}
        <Route path='/products'component={Products}/> 
    </Routes>
  </Router>
  );
}

export default App;
