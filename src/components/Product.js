
import React, { useState, useEffect } from 'react';
import { 
    Route, 
    Switch, 
    useRouteMatch, 
    useParams, 
    NavLink 
  } from 'react-router-dom';


import data from '../data'
import '../CSS/products.css'

function fetchStock() {
    return Promise.resolve({ success: true, data })
  }


const Product = (props) => {
    const [items, setItems] = useState([])
    const  url  = useRouteMatch().url;
    const { id } = useParams();

    useEffect(() => {
        fetchStock().then(res => setItems(res.data))
    }, [])

    console.log(props)
    const item = items.find(item => item.id === parseInt(id));
    console.log("item = ",item.name)
    return (
        <div>
            <h1>Generic</h1>
             {/* <img src='../imaages/pic11.jpg'  /> */}
            <p>{item.detailed1}</p>

            <p>{item.detailed2}</p>

            <p>{item.detailed3}</p>
        </div>
    )
}

export default Product;