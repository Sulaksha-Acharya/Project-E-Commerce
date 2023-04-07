import { Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "@mui/system";
import logo from "../asset/logo.png";
import { blue } from "@mui/material/colors";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <div
    style={{
      backgroundColor: "lightgray",
      display: "flex",
      marginTop: 50,
    }}
  >
    <Container>
      <Row style={{ padding: 20 }}>
        <Typography>
          <Typography variant="h6">
            {" "}
            Experience Hassle-Free Online Shopping with ShopCart
          </Typography>
          <Typography color="text.secondary">
            E-commerce has evolved over the past few years and since it’s easier
            and more convenient, it is evident that customers are actually
            switching to the trend of online shopping. shopping store, brings a
            whole new concept by showcasing a number of famous brands under one
            roof. Not only does it fulfill clothing necessities of both men and
            women but you can also shop for all kinds of appliances like air
            conditioners, heaters, refrigerators, LED TVs and a lot more. Simply
            select your favorite brand like Samsung, Apple, HP, Huawei, Dell,
            Canon, Nikon, etc and get yourself the best electronic items.
          </Typography>
        </Typography>
      </Row>
    </Container>
    <Container>
      <Row style={{ padding: 20 }}>
        <Typography style={{ marginRight: 5 }}>
          <h5>Top Categories & Brands</h5>
          <h6> New Mobile Phones </h6>
          <Typography color="text.secondary">
            {" "}
            Samsung Mobile Phones, Xiaomi Mobiles, Nokia Mobiles,Oppo
            Mobiles,Apple iPhones,OnePlus,Sony Mobiles,Huawei Mobiles,Lenovo
            Mobiles.
            <b>
              <Typography variant="h6">Latest Laptops</Typography>
            </b>
            <Typography>
              Apple Laptop, Samsung Laptops, Dell Laptops, HP Laptops, Acer
              Laptops etc
            </Typography>
            <h6> LRD TVS Prices</h6>
            <Typography>
              {" "}
              Samsung LED TVs,Sony LED TVs, Videcon LED TVs
            </Typography>
          </Typography>
        </Typography>
      </Row>
    </Container>
    <Container>
      <Row style={{ padding: 20 }}>
        <Typography>
          <h5> 100% ORIGINAL</h5>
          <p color="text.seconczry">
            {" "}
            guarantee for all product at shopcart.com
          </p>
          <h5> Return within 30days</h5>
          <p>of receiving your order</p>
          <Typography style={{ marginRight: 40 }}>
            <img
              className="logo"
              src={logo}
              alt="img"
              width={50}
              height={55}
              style={{ marginRight: 30 }}
            />
            <b> Happy Shopping!</b>
            <Typography style={{ marginTop: 10 }}> Follow Us!</Typography>
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
            <FaYoutube />
          </Typography>
        </Typography>
      </Row>
    </Container>
  </div>
);

export default Footer;
