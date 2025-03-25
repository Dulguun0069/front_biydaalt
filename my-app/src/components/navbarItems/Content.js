import React from "react";
import { Layout, theme } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Cart from "../Pages/Cart";

const { Content } = Layout;

const AppContent = ({ cart, setCart }) => { 
const {
    token: { colorBgContainer, borderRadiusLG },
} = theme.useToken();

return (
    <Content style={{ padding: "0 40px" }}>
    <div
        style={{
        background: colorBgContainer,
        minHeight: "500px",
        padding: "24px",
        borderRadius: borderRadiusLG,
        marginTop: "40px",
        }}
    >
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> 
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
    </Content>
);
};

export default AppContent;