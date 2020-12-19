import { Avatar, Card, CardHeader } from "@material-ui/core";
import React from "react";
import { Button, Form, FormControl, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          {/* <Image
            src="https://cdn.discordapp.com/attachments/709748357572198421/787351142039289856/photo_2020-12-08_19-10-34.jpg"
            height="40"
            width="40"
            className="d-inline-block align-top"
            alt="Logo"
            roundedCircle
          /> */}
          QTest
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/add">Add</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About ASS</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contacts">Contacts</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Avatar
            alt={`Sanya`}
            src="https://cdn.discordapp.com/attachments/709748357572198421/787351142039289856/photo_2020-12-08_19-10-34.jpg"
          />
          <Navbar.Text>Sanya</Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
