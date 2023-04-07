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
      <h4 style={{ marginLeft: 190, fontSize: 20 }}>Hi,how can we help you?</h4>
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
