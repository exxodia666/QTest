import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import { delete_user } from "../../redux/actions/add_user";

export default function Header() {
  const dispatch = useDispatch();
  const userr = useSelector((state) => state.user);

  const handleLogout = () => {
    if (userr.user.editing_key.length) {
      dispatch(delete_user({ id: userr.user.id, key: userr.user.editing_key }));
    }
  };

  const [header, setHeader] = useState("");
  const [overlay, setOverlay] = useState("");
  function burger() {
    setHeader(header == "" ? "active" : "");
    setOverlay(overlay == "" ? "overlay_active" : "");
  }

  function over() {
    setHeader(header == "" ? "active" : "");
    setOverlay(overlay == "" ? "overlay_active" : "");
  }
  
  const user = useSelector((state) => state.user.user.name);
  return (
    <header className="header">
      <div className={`overlay ${overlay}`} onClick={over}></div>
      <div className="header__body">
        <Link to="/" className="header__logo">
          <p>
            <span>Q</span>TEST
          </p>
        </Link>

        <nav className={`header__menu ${header}`}>
          <ul className="header__list">
            <li>
              <Link to="/add" className="header__link">
                Add &#10010;
              </Link>
            </li>
          </ul>
        </nav>
        {user && (
          <div className="dropdown-container">
            <div className="dropdown">
              <p className="dropbtn">
                <p>{user}</p>
              </p>
              <div
                className="dropdown-content"
                style={{ minWidth: user.length * 8 }}
              >
                <Link to="/results">Результаты</Link>
                <Link onClick={handleLogout} className="logout">
                  Вийти
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className={`header__burger ${header}`} onClick={burger}>
          <span></span>
        </div>
      </div>
    </header>
  );
}
