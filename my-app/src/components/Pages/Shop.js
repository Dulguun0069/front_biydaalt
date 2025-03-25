import React from 'react';
import Mycard from '../Card/MyCard';

const Shop = ({cart, setCart}) => {
    return(
        <div>  <Mycard cart={cart} setCart={setCart} /></div>
    )
}

export default Shop;