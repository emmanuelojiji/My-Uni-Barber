import "./Profile.scss";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Loading from "../components/Loading";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";
const Profile = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const [name, setName] = useState(auth.currentUser.displayName);
  const [email, setEmail] = useState(auth.currentUser.email);
  const [location, setLocation] = useState("Birmingham");

  const onSubmit = async (e) => {
    console.log("Profile Updated!");

    if (auth.currentUser.displayName !== name) {
      try {
        await updateProfile(auth.currentUser, {
          displayName: name,
          email: email
        });

        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });

        setName(auth.currentUser.name);
        setEmail(auth.currentUser.email);

      } catch (error) {
        console.log("error");
      }
    }
  };

  return (
    <>
      <div className="Profile">
        <header>
          <div className="page-width">
            <h2>Hi {auth.currentUser.displayName}</h2>
          </div>
        </header>

        <main>
          <div className="page-width">
            <form>
              <div className="form-row">
                <h3>Company Name</h3>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>{" "}
                <p className="p-extra-small">
                  If you trade using your personal name, feel free to use this.
                </p>
              </div>
              <div className="form-row">
                <h3>Email</h3>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="form-row">
                <h3>Location</h3>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></input>
                <p className="p-extra-small">
                  This will change where your listing appears.
                </p>
              </div>

              <a className="btn-main" onClick={onSubmit}>
                Update Profile
              </a>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
