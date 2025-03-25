import {useState} from 'react';
import './index.css';

const Counter = () => {
    const[count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count + 1)
    };
    const decreaseCount = () =>{
        setCount(count - 1)
    };
    return(
        <div className="counter">
            <p className="counter-text">Size</p>
            <div className="counter-buttons">
                <button onClick={decreaseCount} disabled={count===1}>-</button>
                <p>{count}</p>
                <button onClick={increaseCount}>+</button>
            </div>
        </div>
    )
}

export default Counter;