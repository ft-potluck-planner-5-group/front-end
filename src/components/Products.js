import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';


import '../CSS/products.css'
import axiosWithAuth from './utils/axiosWithAuth';


const Products = (props) => {

    const [items, setItems] = useState([])
    const  url  = useRouteMatch().url;

    useEffect(() => {
        axiosWithAuth().get('https://backend-potluck-planner.herokuapp.com/api/potlucks')
          .then(resp => {
            console.log("Products.js useEfect, resp", resp)
            setItems(resp.data);
          })
          .catch(err => {
            console.log(err);
          })
      }, [])

    

    return(
        <div id="main">
            <div id="one">
            <h2>Sed amet aliquam</h2>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
            </div>
  

            {
                
                items.map(item=>(
                    <div className={'item-card' }  key={item.id}>
                    <div className={'bg-img order'+ (((item.id+1)*2-1)+(item.id%2*(1)))%2 }>
                        
                        {/* <img
                            className='items-list-image'
                            src={item.imageUrl}
                            alt={item.name}
                        /> */}
                          <img src='https://raw.githubusercontent.com/ft-potluck-planner-5-group/front-end/products/src/images/food2.jpg' alt='pic11.jpg' />
                       
                    </div>
                    <div className={'text order'+ (((item.id+1)*2)+(item.id%2*(-1)) )%2  }>
                        <h2>{item.potluck_name}</h2>
                        {/* <p>{item.instructions}</p> */}
                        <p> Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                        <Link to={`${url}/${item.id}`}>
                            {/* <button>LEARN MORE</button> */}
                        </Link>
                    </div>
                </div>
                ))
            }
        </div>
    )
}
export default Products;

