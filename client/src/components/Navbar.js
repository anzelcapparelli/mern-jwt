import { Link } from "react-router-dom";
import { useAuth } from "../util/authContext";

function Navbar() {
  const auth = useAuth();

  const signOut = () => {
    auth.logout();
  };
  return (
    <ul>
      <li>
        <Link to="/public">Public Page</Link>
      </li>
      <li>
        <Link to="/protected">Protected Page</Link>
      </li>
      <li>
        {auth.isLoggedIn ? (
          <button type="button" onClick={signOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
