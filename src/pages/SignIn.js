import "./SignUp.scss";
import { useState } from "react";
import { Link, navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loading from "../components/Loading";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="sign">

    {isLoading ? <h1>Signing you in..</h1> : ( 
      <>
      <Link to="/" style={{ color: "white", marginBottom: "30px" }}>
        Project Name
      </Link>
      <form onSubmit={submitForm}>
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

        <input type="submit" />

        <p>
          Don't have an account? <Link to="/signup">Sign Up Now</Link>
        </p>
      </form> 
      </>
      )}
    </section>
  );
};

export default SignIn;
