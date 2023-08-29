import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'reactstrap';
import { MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './Login.css'
import { useNavigate } from "react-router-dom";
import logoLogin from '../../Assets/Banner/draw2.webp'
import { Image } from 'react-bootstrap';

function Login(props) {
    let [userName, setUsername] = useState();
    let [password, setPassword] = useState();

    // khai bao hook chuyen link trang
    let navigate = useNavigate();
    //lấy ra key đăng ký và tiến hành login
    const handleLogin = () => {
        // kiem tra admin da dang ki tk chua ?
        let user_LocalStorage = JSON.parse(localStorage.getItem("user_LocalStorage"));
        // neu admin chưa dk tai khoan => chuyen sang trang dki tai khoan (register)
        if (!user_LocalStorage) {
            alert("tai khoan khong ton tai")
            navigate("/register")
        } else {
            // kt nguoi dung nhap dung username va pasword ??
            if (user_LocalStorage.Username === userName && user_LocalStorage.Password === password) {
                let login_user = {
                    UserName: userName,
                    Password: password,
                }

                localStorage.setItem("user_login", JSON.stringify(login_user));
                navigate("/product")
            } else {
                alert("Tai khoan hoac mat khau chua chinh xac")
            }
        }
    }

    return (
        <Row>
            <Col md={6} style={{ marginTop: "100px" }}>
                <Image src={logoLogin} style={{width:'100%'}} alt="Sample image" />
            </Col>
            <Col md={6} style={{ marginTop: "150px" }} >
                <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" >LOGIN</h1><br />
                <Form>
                    <MDBInput wrapperClass='mb-4' id='formControlLg' placeholder="Username or email" type='text' size="lg" onChange={(e) => setUsername(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' placeholder="Password" id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
                    <div className="d-flex justify-content-between mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Save password' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <div className='text-center text-md-start mt-4 pt-2'>
                        <Button className='button' onClick={handleLogin}>Login</Button>
                        <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
                    </div>
                </Form>
            </Col>
        </Row>

    );
}

export default Login;