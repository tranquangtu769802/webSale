import React from 'react';
import { Container } from 'reactstrap';
import LoginRow from '../Login/LoginForm/LoginRow';

function LoginContainner(props) {
    return (
       <Container>
         <LoginRow />
       </Container>
    );
}

export default LoginContainner;