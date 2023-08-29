import { MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'reactstrap';
import './register.css'
import { useNavigate } from "react-router-dom";
import logoRegister from '../../Assets/Banner/draw1.webp'
import { Image } from 'react-bootstrap';

function Register(props) {
    let [yourname, setYourname] = useState();
    let [username, setUsername] = useState();
    let [password, setPassword] = useState();
    let [repeatPassword, setRepeatPassword] = useState();

    // khai bao hook chuyen link trang
    let navigate = useNavigate();

    const handleRegister = () => {
        let user = {
            Yourname: yourname,
            Username: username,
            Password: password,
            RepeatPassword: repeatPassword,
        }

        localStorage.setItem("user_LocalStorage", JSON.stringify(user));
        navigate("/login")

    }
    return (
        <>
            <Col md={4} style={{ marginTop: "100px" }} >
                <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">REGISTER</h1><br />
                <Form>
                    <MDBInput wrapperClass='mb-4' id='formControlLg' placeholder="Your name" type='text' size="lg" onChange={(e) => setYourname(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' id='formControlLg' placeholder="Username or email" type='text' size="lg" onChange={(e) => setUsername(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' placeholder="Password" id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' placeholder="Repeat your password" id='formControlLg' type='password' size="lg" onChange={(e) => setRepeatPassword(e.target.value)} />
                    <div className="d-flex justify-content-between mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Save password' />
                    </div>
                    <Button className="button" onClick={handleRegister}>Register</Button>
                    {/* <div className='text-center text-md-start mt-4 pt-2'>
                        
                    </div> */}
                </Form>
            </Col>

            <Col md={8} style={{ marginTop: "100px" }}>
                <Image src={logoRegister} style={{width: '100%'}} alt="Sample image" />
            </Col>
        </>
    );
}

export default Register;