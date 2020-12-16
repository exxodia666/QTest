import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap'

export default function Header() {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                            <Image
                                src="https://cdn.discordapp.com/attachments/709748357572198421/787351142039289856/photo_2020-12-08_19-10-34.jpg"
                                height="40"
                                width="40"
                                className="d-inline-block align-top"
                                alt="Logo"
                                roundedCircle
                            /> QTest
                        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
