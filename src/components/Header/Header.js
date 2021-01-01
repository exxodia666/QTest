import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  // const history = useHistory();
  const user = useSelector((state) => state.user.user_name);
  console.log("RENDER HEADER");
  return (
    <header class="header">
    <div class="container">
        <div class="header__body">
            <Link to="/" class="header__logo">
                <p><span>Q</span>TEST</p>
            </Link>

            <nav class="header__menu">
                <ul class="header__list">
                    <li>
                        <Link to="/add" class="header__link">Add</Link>
                    </li>
                    <li>
                        <Link to="/contacts" class="header__link">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/about" class="header__link">About Ass</Link>
                    </li>
                </ul>
            </nav>
            <div class="header__user">
                <Link to="/results">
                    <p> Logged as: {user}</p>
                </Link>
            </div>
            <div class="header__burger">
                <span>

                </span>
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
