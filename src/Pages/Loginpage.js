import { Container } from "@mui/system";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { collection, setDoc, doc, getFirestore } from "firebase/firestore";
import {
  auth,
  authentication,
  currentUser,
  provider,
  // signInWithPopup,
} from "../config/firebase";
import { loginUser } from "../store/user-slice";
// import { GoogleLoginButton } from "react-social-login-buttons";

import "firebase/auth";
import firebase from "firebase/compat/app";
import { signInWithPopup } from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";
import { selectUserInfo, userActions } from "../store/user-slice";
import { useDispatch, useSelector } from "react-redux";
import App from "../App";
import SignUpPage from "./SignUpPage";
import { FcGoogle } from "react-icons/fc";

const Loginpage = () => {
  const navigate = useNavigate();
  // const [user] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const db = getFirestore(App);
  const dispatch = useDispatch();
  const userDetail = useSelector(selectUserInfo);

  console.log(userDetail);

  const handleSignIn = async () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        dispatch(userActions.loginUser(res.user));
        navigate("/");
      })

      .catch((err) => {
        console.log(err);
      });
  };
  const GoogleSignIn = async () => {
    GoogleSignIn()
      .then((res) => {
        dispatch(userActions.loginUser(res));
        navigate("/");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const [user, setUser] = useState(null);

  const handleGoogleSignIn = async () => {
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundColor: "lightgray", padding: 50 }}>
      <div>
        <h3 style={{ textAlign: "center" }}>
          Welcome to ShopCard!Please Login
        </h3>
        <Container
          style={{
            maxWidth: 500,
            padding: 50,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          {Error && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {Error?.message}
            </div>
          )}
          {error && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {error?.message}
            </div>
          )}

          <div>
            {user ? (
              <div>
                <h2>Welcome, {user.displayName}!</h2>
                <p>Your email address is {user.email}.</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" onClick={handleSignIn}>
              Login
            </Button>
            <Form.Group>
              <Form.Text className="text-muted">
                If you don't have an account , please
                <Link
                  to="signUp"
                  style={{ color: "#737373", marginLeft: 5, color: "red" }}
                >
                  Sign-up
                </Link>
              </Form.Text>
            </Form.Group>
            <Button variant="Outlined" onClick={handleGoogleSignIn}>
              {" "}
              <FcGoogle />
              Login with Google
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};
export default Loginpage;
