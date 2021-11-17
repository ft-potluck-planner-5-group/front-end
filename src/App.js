
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Products from './components/Products';
import Product from './components/Product';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
  <Router>
    <Header />
    <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/signup" component={SignUp} /> 
        <PrivateRoute path="/products/:id"   component={Product} /> 
        <PrivateRoute path="/products"   component={Products} /> 
  
    </Switch>
  </Router>
  );
}

export default App;



