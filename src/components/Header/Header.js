import React, {useState, useContext} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header({takeState}) {

const [header, setHeader] = useState("");

  function burger() {
    setHeader((header == "") ? "active" : "");
    takeState()
    // $('.leftbar').removeClass('leftbar_active');
  }

  const user = useSelector((state) => state.user.user_name);
  console.log("RENDER HEADER");
  return (
    <header className="header">
      <div className="container__header">
        <div class="header__body">
          <Link to="/" className="header__logo">
            <p>
              <span>Q</span>TEST
            </p>
          </Link>

          <nav className={`header__menu ${header}`}>
            <ul className="header__list">
              <li>
                <Link to="/add" className="header__link">
                  Add
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="header__link">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/about" className="header__link">
                  About Ass
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__user">
            <Link to="/results">
              <p> Logged as: {user}</p>
            </Link>
          </div>
          <div className={`header__burger ${header}`} onClick={burger}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
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
