import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

function MainHeader (){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=>setIsOpen(!isOpen);
    
    return (
        <div>
        <Navbar color="light" light expand="md" >
<NavbarBrand href="/">Logo</NavbarBrand>
<NavbarToggler onClick={toggle} />
<Collapse isOpen={isOpen} navbar>
    <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink href="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/users">Members</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/logout">Logout</NavLink>
        </NavItem>
            </Nav>
</Collapse>
        </Navbar>
        </div>
    )};//end;

    export default MainHeader;