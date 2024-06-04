import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counter'

const Products=()=>{
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(increment())
 
  };
 const  handleRemoveFromCart=()=>{
  dispatch(decrement())


 }


 
    return(
        <div>
        <img src="https://www.shutterstock.com/shutterstock/photos/2330060869/display_1500/stock-photo-ice-coffee-in-a-tall-glass-with-cream-poured-over-ice-cubes-and-beans-on-a-dark-concrete-table-2330060869.jpg" alt="Coffee" width="200" height="200" /><br></br>
        <button onClick={handleRemoveFromCart}>Decrement </button>
        <button >Add to Cart </button>
        <button onClick={handleAddToCart}>Increment </button> <br></br>
        <br></br>
    
        

        </div>
    )
}

export default Products;

