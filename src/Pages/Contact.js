import React from "react";
import { color, Container, width } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import contactus from "../asset/contactus.jpg";
import contact from "../asset/contact.jpg";
import { lightBlue, red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Table, TableBody, TableRow } from "@mui/material";

const Contact = () => {
  return (
    <div>
      <img
        className="contactus"
        src={contactus}
        alt="img"
        width={"1300"}
        height={300}
        style={{ marginLeft: 160, marginBottom: 140, marginTop: 50 }}
      />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14130.948231973627!2d85.34462205!3d27.694520599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1681814921257!5m2!1sen!2snp"
        width="400"
        height="300"
        style={{ marginLeft: "70%" }}
        // style="border:0;"
        allowfullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <Container style={{ display: "flex" }}></Container>

      <Card sx={{ display: "flex", maxWidth: 300, gap: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}></Box>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <h4>Call Us</h4>
          <Typography>90004400044</Typography>
          <Typography>87772882288</Typography>
          <h4>Location</h4>
          <Typography>asdfghjkl;kaxcvbnm,.</Typography>
          <Typography>asdfghjkl;kaxcvbnm,.</Typography>
          <h4>Business hours</h4>
          <Typography>Monday to Friday</Typography>
          <Typography>
            LIVE CHAT services are available Sun to Fri: 7 AM to 9 PM and Sat: 9
            AM to 9 PM.
          </Typography>
        </CardContent>
      </Card>
      <Container style={{ display: "flex", gap: 10, marginBottom: 50 }}>
        <Card sx={{ boxShadow: "none", border: 1 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              I want to know where is my Order
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Get status updates about your
              <br />
              order with our Tracking Tool
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Order status </Button>
          </CardActions>
        </Card>
        <Card sx={{ boxShadow: "none", border: 1 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              I want to return an item
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Use our Online return from
              <br />
              to start your Return
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Order status </Button>
          </CardActions>
        </Card>
        <Card sx={{ boxShadow: "none", border: 1 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              I want to cancel an order
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Use our online Cancellation
              <br /> from to start your order
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Order status </Button>
          </CardActions>
        </Card>
      </Container>

      <Container style={{ display: "flex", marginBottom: 30 }}>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardMedia>
              <img
                className="contact"
                src={contact}
                alt="img"
                width="70%"
                height="100%"
                fluid
              />
            </CardMedia>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography>
                For order status inquiry,please visit our help center to cancel
                <br />
                and return your ordered items, please login-in with your account
                here.
                <br /> Can't find the answer you are looking for?
                <br />
                your automated virtual assistant is available 24 hours a day.
                <br />
                LIVE CHAT services are available Sun to Fri: 7 AM to 9 PM and
                Sat: 9 AM to 9 PM.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
