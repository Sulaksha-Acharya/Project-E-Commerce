import { Badge, Button, ListItem, TextField } from "@mui/material";
import React from "react";
import { Form, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import logo from "../asset/logo.png";
import { FaHeart, FaShoppingCart, FaUser, FaShoppingBag } from "react-icons/fa";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { selectItemCount } from "../store/cart-slice";
import { red } from "@mui/material/colors";
import { currentUser } from "../config/firebase";
import { Link, useHistory } from "react-router-dom";
import { selectUserInfo, userActions } from "../store/user-slice";
a;

const Header = () => {
  const dispatch = useDispatch();
  const cartItemcount = useSelector(selectItemCount);

  const loggedInUser = useSelector(selectUserInfo);

  function logout() {
    dispatch(userActions.logout());
  }

  return (
    <div>
      <Navbar
        style={{
          fontSize: 18,
          maxWidth: "1170px",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          flexDirection: "row",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="img"
            width={70}
            height={70}
            style={{ marginBottom: 20 }}
          />
        </Link>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav style={{ display: "flex", float: "left" }}>
            <Link to="about" style={{ color: "#737373", marginLeft: 30 }}>
              About
            </Link>
            <Link to="contact" style={{ color: "#737373", marginLeft: 30 }}>
              <FaUser /> ContactUs
            </Link>

            <div>
              <input
                placeholder="Search for products,brands and more"
                style={{
                  marginLeft: 15,
                  marginRight: 30,
                  height: 30,
                  width: "400px",
                }}
              />
            </div>
            <Link to="Wishlist" style={{ color: "#737373", marginLeft: 60 }}>
              Wishlist
            </Link>
            <Link
              to="cart"
              style={{
                color: "#737373",
                marginLeft: 30,
                backgroundcolor: red,
              }}
            >
              <Badge badgeContent={cartItemcount} color="primary">
                {" "}
                <FaShoppingCart />{" "}
              </Badge>
            </Link>
            <Link to="SignUp" style={{ color: "#737373", marginLeft: 30 }}>
              SignUp
            </Link>
            <Link to="ContactUs" style={{ color: "#737373", marginLeft: 30 }}>
              ContactUS
            </Link>
            {!loggedInUser && (
              <Link to="Login" style={{ color: "#737373", marginLeft: 30 }}>
                Login
              </Link>
            )}
            {/* {!handleGoogleSignIn && (
              <Link to="Login" style={{ color: "#737373", marginLeft: 30 }}>
                Login
              </Link>
            )} */}
            <NavDropdown
              title="Profile"
              // title={!currentUser ? "Profile" : currentUser?.email}
              style={{
                color: "#737373",
                marginRight: 70,
                marginInline: 12,
                marginTop: -7,
                marginBottom: 12,
              }}
            >
              {loggedInUser ? (
                <>
                  <NavDropdown.Item href="orders"> Orders</NavDropdown.Item>{" "}
                  <NavDropdown.Item href="contact">Contact us</NavDropdown.Item>{" "}
                  <NavDropdown.Item href="wishlist"> Wishlist</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>
                    {" "}
                    Logout
                  </NavDropdown.Item>{" "}
                </>
              ) : (
                <>
                  {/* <NavDropdown.Item href="signUp">SignUp</NavDropdown.Item> */}
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
