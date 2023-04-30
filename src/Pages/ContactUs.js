import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "react-bootstrap";

const theme = createTheme({
  palette: {
    neutral: {
      main: "crimson",
      contrastText: "#fff",
    },
  },
});

const Forms = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div style={{ padding: 50, textAlign: "center" }}>
        <Typography sx={{ fontSize: 36 }} color="black" gutterBottom>
          <strong>Get Started </strong>-{" "}
          <normal>Request free consultation</normal>
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          paddingBottom: 100,
        }}
      >
        <Container>
          <Row>
            <Col
              sm={12}
              lg={6}
              style={{
                height: "auto",

                position: "relative",
                borderRadius: 10,
                paddingTop: 30,
                backgroundColor: "white",
                boxShadow: "inherit",
              }}
            >
              <div
                style={{
                  margin: 30,
                  marginBottom: 30,
                  backgroundColor: "white",
                  minwidth: 400,
                }}
              >
                <TextField fullWidth label="Enter your name" id="fullWidth" />
              </div>
              <div
                style={{
                  margin: 30,
                  marginBottom: 30,
                  backgroundColor: "white",
                  minwidth: 400,
                }}
              >
                <TextField fullWidth label="Enter your email" id="fullWidth" />
              </div>
              <div
                style={{
                  margin: 30,
                  marginBottom: 30,
                  backgroundColor: "white",
                  minwidth: 400,
                }}
              >
                <TextField
                  fullWidth
                  label="Enter your phone number"
                  id="fullWidth"
                />
              </div>
              <div
                style={{
                  margin: 30,
                  marginBottom: 30,
                  backgroundColor: "white",
                  minwidth: 400,
                }}
              >
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Enter your message"
                  multiline
                  rows={4}
                />
              </div>

              <ThemeProvider theme={theme}>
                <Button
                  color="neutral"
                  style={{ marginLeft: 30, marginBottom: 20 }}
                  size="large"
                  variant="contained"
                >
                  Submit
                </Button>
              </ThemeProvider>
            </Col>
            <Col lg={6} sm={12}>
              <iframe
                frameborder="0"
                scrolling="no"
                height="550"
                width="100%"
                src="https://maps.google.com/maps?q=Nepal%20Can%20Move%20kathmandu&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near"
                title="Nepal Can Move kathmandu"
                aria-label="Nepal Can Move kathmandu"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Forms;
