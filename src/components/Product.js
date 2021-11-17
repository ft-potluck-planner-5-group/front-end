

import { useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react'


import '../CSS/product.css'
import axiosWithAuth from './utils/axiosWithAuth';


const Product = (props) => {
    // const {items} = props
    const [item, setItem] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth().get(`/potlucks/:potluck_${id}`)
          .then(resp => {
            console.log(resp)
            setItem(resp.data);
          })
          .catch(err => {
            console.log(err);
          })
      }, [])

    // console.log("Product item = ",item)
    return (
        <div className='product-div'>
            <h1>Generic</h1>
             <img src='https://raw.githubusercontent.com/ft-potluck-planner-5-group/front-end/products/src/images/pic11.jpg' alt='pic11.jpg' />
            <p>{item.detailed1}</p>

            <p>{item.detailed2}</p>

            <p>{item.detailed3}</p>
        </div>
    )
}

export default Product;