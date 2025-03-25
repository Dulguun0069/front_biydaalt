import {useState} from 'react';
import './index.css';

const ColorList = ({colors}) => {
    const [activeColor, setActiveColor] = useState(null);

    const handleCLick = (color) => {
        setActiveColor(color);
    };

    return(
        <div className="color-list">
            <h3> Colors</h3>
            <ul className="color-options">
                {colors.map((color) => (
                    <li key={color} onClick= {() => handleCLick(color)}
                    style={{color : color, cursor : "pointer", padding : "10px"}}
                    className={activeColor === color ? "active" : ""}>  {color} </li>
                ))}
            </ul>
            <p className="color-active">Active Color : {activeColor}</p>
        </div>
    )
}

export default ColorList;