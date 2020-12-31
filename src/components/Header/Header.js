import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  // const history = useHistory();
  const user = useSelector((state) => state.user.user_name);
  console.log("RENDER HEADER");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span>Q</span>TEST
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/add">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About ASS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/results">Logged as: {user}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

//  <nav>
//     <div className="nav-wrapper mv">
//       <Link
//         style={{
//           color: "inherit",
//           textDecoration: "inherit",
//           cursor: "pointer",
//         }}
//         className="brand-logo left"
//         to="/"
//       >
//         QTest
//       </Link>
//       <ul className="right hide-on-med-and-down">
//         <li>
//           <Link to="/add">Add</Link>
//         </li>
//         <li>
//           <Link to="/contacts">Contacts</Link>
//         </li>
//         <li>
//           <Link to="/about">About ASS</Link>
//         </li>
//         <li>
//           <Link to="/results">Logged as: {user}</Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
