import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../config/firebase";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ res });
    } catch (err) {
      setError(err);
    }
  };

  console.log(auth);

  return (
    <div style={{ backgroundColor: "lightblue", padding: 50 }}>
      <div>
        <h3 style={{ textAlign: "center" }}>Sign up to ShopCard</h3>

        <Container
          style={{
            maxWidth: 500,
            padding: 50,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          {error && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {error?.message}
            </div>
          )}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="full name"
                placeholder="Enter your first and last name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="email"
                placeholder="Please enter your phone number"
              />
            </Form.Group>
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
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
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
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default SignUpPage;
