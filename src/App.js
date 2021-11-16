
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Products from './components/Products';
import Product from './components/Product';
import Login from './components/Login';

import data from './data'
function fetchStock() {
  return Promise.resolve({ success: true, data })
}

function App() {
  const [items, setItems] = useState([])
 

  useEffect(() => {
      fetchStock().then(res => setItems(res.data))
  }, [])

  // console.log("App.js props = ", items)

  return (
  <Router>
    <Header />
    <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/login" component={Login}/>

        <Route path="/signup" component={SignUp} /> 
     
        <Route path="/products/:id"
          render={props => <Product items={items} />}
        />
        <Route path="/products"
          render={props => <Products items={items}  />}
        />
    </Switch>
  </Router>
  );
}

export default App;



