import { Badge, Button, ListItem, TextField } from "@mui/material";
import React from "react";
import { Form, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import logo from "../asset/logo.png";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser, FaShoppingBag } from "react-icons/fa";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import { selectItemCount } from "../store/cart-slice";
import { red } from "@mui/material/colors";

const Header = () => {
  const cartItemcount = useSelector(selectItemCount);
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
              <FaHeart /> About
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
              {/* <div style={
                      font-size: 200px;
                      top:0
                      right:0;
                      color : #fff;
                      position: relative;
                      border-radius: 50%;
                      background-color: red;
                      display: flex;
                      justify-content: center;
                      font-size : 30px;
                      border: 10px solid #01111b;
                 }>
                </div>          */}
              <Badge badgeContent={cartItemcount} color="primary">
                {" "}
                <FaShoppingCart />{" "}
              </Badge>
            </Link>
            <NavDropdown
              title="Profile"
              style={{
                color: "#737373",
                marginRight: 70,
                marginInline: 12,
                marginTop: -7,
                marginBottom: 12,
              }}
            >
              <NavDropdown.Item href="login">Login/Logout</NavDropdown.Item>
              <NavDropdown.Item href="orders"> Orders</NavDropdown.Item>
              <NavDropdown.Item href="contact">Contact us</NavDropdown.Item>
              <NavDropdown.Item href="wishlist"> Wishlist</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
