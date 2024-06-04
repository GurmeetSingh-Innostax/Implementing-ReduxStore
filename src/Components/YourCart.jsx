import React from 'react';
import { useSelector } from 'react-redux';

const YourCart=()=>{
    const count = useSelector((state) => state.counter.value)
    return(
        <div style={{ justifyContent: 'flex-end' }}>
            <h2> YOUR CART</h2><br></br>
            <ul >
            <span>Item: Coffee</span> <br></br>
            <span> Count: {count}</span> 
            
            </ul>

        </div>
    )

}
export default YourCart;