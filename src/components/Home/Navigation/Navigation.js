import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user,logOut  } = useAuth({});
    return (
        <div className="mb-5">
            <Navbar bg="dark" fixed="top" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/allProducts">All Products</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>

                    </Nav>
                    <Nav>
                        {
                            user.email ? <>
                                <Button onClick={logOut} className="btn btn-danger">Log Out</Button>
                                <Nav.Link eventKey={2} href="#memes">
                                    {
                                        user?.displayName
                                    }
                                </Nav.Link>
                            </> : ''
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;