import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, logOut } = useAuth({});
    return (
        <div className="navbar-container">
            <Navbar 
            collapseOnSelect expand="lg" 
            className="mb-5" bg="dark" fixed="top" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Bike STORE</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/allProducts">All Products</NavLink>
                       
                        {user.email && <NavLink className="nav-link" to="/dashBoard">DashBoard</NavLink>}

                    </Nav>
                    <Nav>

                        {
                            user.email ?

                                 <>
                                  <Nav.Link eventKey={2} href="#memes">
                                        {
                                            user?.displayName
                                        }
                                    </Nav.Link>
                                    <Button onClick={logOut} className="btn btn-danger">Log Out</Button>
                                   
                                </>:
                    <NavLink className="nav-link" to="/login">Login</NavLink>

                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;