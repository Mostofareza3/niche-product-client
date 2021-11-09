import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="mb-5">
            <Navbar bg="dark" fixed="top"  variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/allProducts">All Products</NavLink>
                        <NavLink className="nav-link" to="/home">Login</NavLink>
                       
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;