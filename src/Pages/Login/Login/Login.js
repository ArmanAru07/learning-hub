import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, FaMailBulk } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    const {ProviderLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () =>{
        ProviderLogin(googleProvider)
        .then(result =>{
            const user =result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <h2>Please Login..!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <div>
                    <ButtonGroup>
                        <h6 className=''>Login with</h6>
                        <Button onClick={handleEmailLogin} className='m-3 rounded' variant="outline-secondary"><FaMailBulk></FaMailBulk></Button>
                        <Button onClick={handleGoogleLogin} className='m-3 rounded' variant="outline-primary"><FaGoogle></FaGoogle></Button>
                        <Button onClick={handleGitHubLogin} className='m-3 rounded' variant="outline-dark"><FaGithub></FaGithub></Button>
                    </ButtonGroup>
                </div>
            </Form>
        </div>
    );
};

export default Login;