import React, { useState } from 'react'
import Header from '../Header';
import {Form, Button,Container} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('admin');

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username',username );
    localStorage.setItem('password',password );
    history.push('/');
  };

  return (
      <div>
        <Header />
        <Container>
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={e => setUserName(e.target.value)} type="text" placeholder="Enter username" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
        
    </div>
  )
};

export default Login;
