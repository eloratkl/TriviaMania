import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";
import logoLong from "/Users/meowdaline/Desktop/SCTP/Trivia Mania React Quiz/TriviaMania/trivia-mania/src/assets/logoLong.png";
import styles from "./RenderNavigation.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {nav.map((r, i) => {
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return null;
      })}
    </Routes>
  );
};

export const RenderMenu = () => {
  const [navIsExpanded, setNavIsExpanded] = useState(false);
  const { user, logout } = AuthData();

  const MenuItem = ({ r }) => {
    return (
      <li className={styles.menuItem}>
        <Link to={r.path}>{r.name}</Link>
      </li>
    );
  };

  const hasRegisterLink = nav.some((r) => r.path === "/register");

  return (
    <nav>
      {/* Mobile Burger Menu */}
      {/* icon from heroicons.com */}
      <button
        className={styles.hamburger}
        onClick={() => {
          setNavIsExpanded(!navIsExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </button>

      <div className={styles.logo}>
        <Link to="/">
          <img src={logoLong} alt="Trivia Mania Logo" />
        </Link>
      </div>

      <ul className={navIsExpanded ? "" : styles.expanded}>
        <div className={styles.navbar_left}>
          {nav.map((r, i) => {
            if (
              (!r.isPrivate && r.isMenu) ||
              (r.path === "/register" && !user.isAuthenticated)
            ) {
              return <MenuItem key={i} r={r} />;
            } else if (user.isAuthenticated && r.isMenu) {
              return <MenuItem key={i} r={r} />;
            } else return null;
          })}
        </div>

        <div className={styles.navbar_right}>
          {user.isAuthenticated ? (
            <li className={styles.menuItem} onClick={logout}>
              Logout
            </li>
          ) : (
            <li className={styles.menuItem}>
              <Link to="/login">Login</Link>
            </li>
          )}

          {!user.isAuthenticated && !hasRegisterLink && (
            <li className={styles.menuItem}>
              <Link to="/register">Register</Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};
