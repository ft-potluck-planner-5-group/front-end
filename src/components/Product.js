
import React from 'react';
import { useParams} from 'react-router-dom';



import '../CSS/product.css'


const Product = (props) => {
    const {items} = props

    const { id } = useParams();


    // console.log(props)
    const item = items.find(item => item.id === parseInt(id));
    // console.log("item = ",item)
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