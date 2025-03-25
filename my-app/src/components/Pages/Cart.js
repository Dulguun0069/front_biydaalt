import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Button, Card } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import "./shopping-cart.css"

const Cart = () => {
const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

return (
    <div className="cart-container">
    <h2>Shopping Cart</h2>
    {cart.length === 0 ? (
        <p>Your cart is empty.</p>
    ) : (
        <>
        {cart.map((item) => (
            <Card key={item.id} className="cart-item">
            <img src={item.picture} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div className="cart-item-actions">
                <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <PlusOutlined />
                </Button>
                <span>{item.quantity}</span>
                <Button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                    <MinusOutlined />
                </Button>
                <Button onClick={() => removeFromCart(item.id)} danger>
                    <DeleteOutlined />
                </Button>
                </div>
            </div>
            </Card>
        ))}
        <div className="cart-summary">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <Button onClick={clearCart} danger>Empty Cart</Button>
        </div>
        </>
    )}
    </div>
);
};

export default Cart;