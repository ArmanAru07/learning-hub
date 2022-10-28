import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, FaMailBulk } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const { ProviderLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //email and pass
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('');
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    //Google signIn
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        ProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error))
    }
    //Github signIN
    const gitHubProvider = new GithubAuthProvider()
    const handleGitHubLogin = () => {
        ProviderLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='m- p-5'>
            <Card>
                <h2>Please Login..!</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="m-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>

                    <div>
                        <ButtonGroup>
                            <Button onClick={handleGoogleLogin} className='m-3 rounded' variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
                            <Button onClick={handleGitHubLogin} className='m-3 rounded' variant="outline-dark"><FaGithub></FaGithub>Login with GitHub</Button>
                        </ButtonGroup>
                    </div>
                    <small>Please register your account</small> <br />
                    <Link to='/register' className='m-4'><Button variant="primary">Register</Button></Link>
                </Form>
            </Card>
        </div>
    );
};

export default Login;