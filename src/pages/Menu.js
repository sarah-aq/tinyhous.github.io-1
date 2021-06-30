import React from "react"
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


function Menu() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Tiny</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" class="nav-link">Home</Link>
                    <Link to="/Tour" class="nav-link">Tour</Link>
                    <Link to="/Contact"  class="nav-link">Contact us</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        
    );
}

export default Menu;