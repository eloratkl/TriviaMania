import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";

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
  const { user, logout } = AuthData();

  const MenuItem = ({ r }) => {
    return (
      <div className="menuItem">
        <Link to={r.path}>{r.name}</Link>
      </div>
    );
  };

  const hasRegisterLink = nav.some((r) => r.path === "/register");

  return (
    <div className="menu">
      <div className="menuItems">
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

      <div className="menuAuth">
        {user.isAuthenticated ? (
          <div className="menuItem" onClick={logout}>
            Logout
          </div>
        ) : (
          <div className="menuItem">
            <Link to="/login">Login</Link>
          </div>
        )}

        {!user.isAuthenticated && !hasRegisterLink && (
          <div className="menuItem">
            <Link to="/register">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};
