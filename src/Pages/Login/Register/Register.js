import React, { useState } from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate('/login');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    return (
        <div className='m- p-5'>
            <Card >

                <h2 className='p-4'>Please Register...!!</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name="photo" type="text" placeholder="photo URL" />
                    </Form.Group>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="m-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="m-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms and condition" />
                    </Form.Group>

                    <Button className='m-4' variant="primary" type="submit">
                        Register
                    </Button>
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                </Form>

            </Card>


        </div>
    );
};

export default Register;