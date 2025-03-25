import React, {useState} from 'react';
import {Button, Input, Form, message} from 'antd';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const[username, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () =>{
        if(username === "Admin" && password === "123"){
            localStorage.setItem("isLoggedIn" , "true");
            message.success("Login succesful");
            navigate("/Profile")
        }else{
            message.error("Invalid username or password")
        }
    };

    return (
        <div style={{padding : "20px"}}>
            <h2> Login</h2>
            <Form layout="vertical">
                <Form.Item label="Username">
                    <Input value={username} onChange={(e) => setUserName(e.target.value)}/>
                </Form.Item>
                <Form.Item label="Password">
                    <Input value={password} onChange={(e) => 
                    setPassword(e.target.value)}/>
                </Form.Item>
                <Button type="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login;