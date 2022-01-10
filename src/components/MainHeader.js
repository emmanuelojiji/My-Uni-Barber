import "./MainHeader.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react/cjs/react.development";

const MainHeader = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
    console.log("clicked");
  };

  return (
    <header className="main-header">
      <div className="page-width">
        <h3>MyUniBarber</h3>

        <nav>
          <Link to="/signup">Create listing</Link>

          {signedIn ? (
            <div
              className="profile-circle-container"
              onMouseOver={() => setShowMenu(true)}
            >
              <div className="profile-circle"></div>
              <div className="profile-menu-container"></div>
            </div>
          ) : (
            <Link to="/signin">Log In</Link>
          )}

          <div
            className="profile-menu"
            style={{ display: showMenu ? "flex" : "none" }}
          >
            <Link to="/profile">Profile</Link>
            <a>Listings</a>
            <a onClick={onLogout}>Sign Out</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
