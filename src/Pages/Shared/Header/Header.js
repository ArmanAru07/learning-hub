import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGraduationCap, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><FaGraduationCap></FaGraduationCap> Learning Hub</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to=''>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to ='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        
                    <Button variant="dark">Dark/Light</Button>
                        
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button variant="dark" onClick={handleLogOut}>Log Out</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'><Button variant="dark">Login</Button></Link>
                                    <Link to='/register'><Button variant="dark">Register</Button></Link>
                                </>
                            }
                            
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photo ?
                            <Image style={{height: '30px'}} roundedCircle src={user?.photo}></Image>
                            : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;