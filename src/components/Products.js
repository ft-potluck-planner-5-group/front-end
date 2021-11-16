import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';


import data from '../data'
import '../CSS/products.css'

function fetchStock() {
    // fetchStock simulates getting data through axios.get(<URL>)
    return Promise.resolve({ success: true, data })
  }


const Products = () => {
    const [items, setItems] = useState([])
    const  url  = useRouteMatch().url;

    useEffect(() => {
        fetchStock().then(res => setItems(res.data))
    }, [])

    // console.log("Products items = ", items)

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
                        
                        <img
                            className='items-list-image'
                            src={item.imageUrl}
                            alt={item.name}
                        />
                       
                    </div>
                    <div className={'text order'+ (((item.id+1)*2)+(item.id%2*(-1)) )%2  }>
                        <h2>{item.name}</h2>
                        <p>{item.instructions}</p>
                        <Link to={`${url}/${item.id}`}>
                            <button>LEARN MORE</button>
                        </Link>
                    </div>
                </div>
                ))
            }
        </div>
    )
}
export default Products;

