import "./SignUp.scss";
import { useState } from "react";
import { Link, navigate, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import Loading from "../components/Loading";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error!");
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
      });

      console.log("sent");

      navigate("/signin");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <section className="sign">
      {isLoading ? (
        <h1>Creating your account..</h1>
      ) : (
        <>
          <Link to="/" style={{ color: "white", marginBottom: "30px" }}>
            Project Name
          </Link>
          <form onSubmit={submitForm}>
            <input
              type="text"
              className="nameInput"
              placeholder="Enter Personal / Company Name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              className="emailInput"
              placeholder="Enter Email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Enter Password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div>
              <input
                type="checkbox"
                onChange={() =>
                  showPassword ? setShowPassword(false) : setShowPassword(true)
                }
              ></input>
              <span style={{ color: "white" }}>Show Password</span>
            </div>

            <input type="submit" />

            <p>
              Already have an account? <Link to="/signin">Sign In Now</Link>
            </p>
          </form>

          {isError && <h1 style={{ color: "white" }}>{errorMessage}</h1>}
        </>
      )}
    </section>
  );
};

export default SignUp;
