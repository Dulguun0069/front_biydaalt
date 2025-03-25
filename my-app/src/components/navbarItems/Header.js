            import React, {useContext} from 'react';
            import {Layout, Menu} from 'antd';
            import {Link} from "react-router-dom"
            import {CartContext} from "../Pages/CartContext";
            import './style.css';

            const {Header} = Layout;

            const AppHeader = () => {
                const {cart} = useContext(CartContext);
                const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

                return(
                    <Header className="navbar" style={{display : "flex", alignItems : "center", padding : "0, 20px", justifyContent : "space-between", height : "64px"}}>
                        <Link to="/">
                        <img src="zurg.jpg" alt="logo" style={{width : "60px", height: "60px", marginLeft : "30px"}}/>  
                            </Link>

                            <Menu theme="dark" mode="horizontal" style={{flexGrow : 1, justifyContent : "space-between"}}>
                                <Menu.Item key="1">
                                    <Link to="/">Home</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/shop">Shop</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/about">About</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/login">Login</Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <div style={{marginRight : "30px"}}>
                                        <Link to="/cart">
                                        <img src="cart.jpg" alt="cart" style={{width : "30px", height : "30px"}}/>
                                        {totalItems > 0 && (
                                            <span 
                                            style={{
                                                position: "absolute",
                                    top: "-5px",
                                    right: "-10px",
                                    background: "red",
                                    color: "white",
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "12px",
                                    fontWeight: "bold"
                                            }}
                                            >
                                                {totalItems}
                                            </span>
                                        )}
                                        </Link>
                                        </div>
                                </Menu.Item>
                            </Menu>
                    </Header>
                )
            }
            export default AppHeader;