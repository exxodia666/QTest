import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export default function Header() {
  // const history = useHistory();
  return (
    <nav>
      <div class="nav-wrapper mv">
        <Link
          style={{
            color: "inherit",
            textDecoration: "inherit",
            cursor: "pointer",
          }}
          class="brand-logo left"
          to="/"
        >
          QTest
        </Link>
        <ul class="right hide-on-med-and-down">
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/about">About ASS</Link>
          </li>
          <li>
            <Link to="/results">Logged as: Sanya</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
// <Navbar bg="light" expand="lg">
//   <Navbar.Brand>

//     <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
//       {/* <Image
//         src="https://cdn.discordapp.com/attachments/709748357572198421/787351142039289856/photo_2020-12-08_19-10-34.jpg"
//         height="40"
//         width="40"
//         className="d-inline-block align-top"
//         alt="Logo"
//         roundedCircle
//       /> */}
//       QTest
//     </Link>
//   </Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Link
//         style={{ color: "inherit", textDecoration: "inherit" }}
//         to="/add"
//       >
//         Add
//       </Link>

//       <Link
//         style={{ color: "inherit", textDecoration: "inherit" }}
//         to="/about"
//       >
//         About ASS
//       </Link>

//       <Link
//         style={{ color: "inherit", textDecoration: "inherit" }}
//         to="/contacts"
//       >
//         Contacts
//       </Link>
//     </Nav>
//     <Nav>
//       <Avatar
//         onClick={() => history.push(`/results/`)}
//         alt={`Sanya`}
//         src="https://cdn.discordapp.com/attachments/709748357572198421/787351142039289856/photo_2020-12-08_19-10-34.jpg"
//       />
//       <Navbar.Text>Sanya</Navbar.Text>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
