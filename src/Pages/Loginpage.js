import { Typography } from "@mui/material";
import { green, lightBlue, red } from "@mui/material/colors";
import { Container } from "@mui/system";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

// const Loginpage = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
// };

// let name, value;
// const getUserData = (event) => {
//   name = event.target.name;
//   value = event.target.value;

//   setUser({ ...user, [name]: value });
// };

// const postData = async (e) => {
//   e.preventDefault();

//   const {email,password} = user;
//    const res = await fetch(

//    "https://e-commerce-website-e760e-default-rtdb.firebaseio.com/reactdata.json", {
//     method: "POST"
//     headers: {
//       "Content-Type" : "application/json",
//     },
//     body: JSON.stringify
//     email,
//      password,
//   })
//  }
//  );

//    if (res) {
//       setUser({
//       email: "",
//       password: "",
//     });
//     alert("Data Stored Sucessfully")
//    }
//   };

function BasicExample() {
  return (
    <div style={{ backgroundColor: "lightblue", padding: 50 }}>
      <div>
        <h3 style={{ textAlign: "center" }}>Login in to ShopCard</h3>
        <Typography style={{ textAlign: "center" }}>
          Enter your Login Details
        </Typography>
        <Container
          style={{
            maxWidth: 500,
            padding: 50,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group>
              <Form.Text className="text-muted">
                If you don't have an account , please
                <Link
                  to="Sign-up"
                  style={{ color: "#737373", marginLeft: 5, color: "red" }}
                >
                  Sign-up
                </Link>
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default BasicExample;
