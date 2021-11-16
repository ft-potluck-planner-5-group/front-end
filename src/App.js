
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Header from './components/Header';
import SignUp from './components/SignUp';


function App() {
  return (
  <Router>
    <Header />
    <Switch>
        <Route path="/signup" component={SignUp} />
    </Switch>
  </Router>
  );
}

export default App;
