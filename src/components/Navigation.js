import React, { useState, Component } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import theLogo from '../assets/images/mainlogo.png'

import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
    const [navbar, setNavbar] = useState(false)
    const fixedNavbar = () => {
        if(window.scrollY >= 45) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', fixedNavbar)
    return(
        <div>
            <div className="top-contact">
                <div className="container">
                    <ul>
                        <li><i className="fas fa-phone-alt"></i> 01069378239 - 01060049100 </li>
                        <li><i className="fas fa-envelope-open-text"></i> mailto:betaam.a.e.f@gmail.com</li>
                    </ul>
                </div>
            </div>
            <Navbar className={navbar ? 'navbar active' : 'navbar'} bg="light" expand="lg">
                <div className="container">
                    <NavLink exact to="/"><img src={theLogo} /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <NavLink exact to="/">Home</NavLink>
                            <NavLink to="/categories">products</NavLink>
                            <NavLink to="/about">about</NavLink>
                            <NavLink to="/contact">contact betaa</NavLink>
                        </Nav>
                        <Form className="formnav" inline>
                            <FormControl className="inputsearch" type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Navigation;