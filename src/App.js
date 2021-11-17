
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Products from './components/Products';

function App() {
  return (
  <Router>
    <Header />
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={SignUp} /> 
        <Route path='/products' component={Products}/> 
    </Switch>
  </Router>
  );
}

export default App;



