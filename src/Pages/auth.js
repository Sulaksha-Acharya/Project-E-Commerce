import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input placeholder="Password..." />
      <Button variant="primary" onClick={handleSignIn}>
        {" "}
      </Button>
      <Button variant="primary">Login</Button>
    </div>
  );
};
