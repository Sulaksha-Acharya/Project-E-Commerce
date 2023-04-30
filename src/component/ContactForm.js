import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Card } from "react-bootstrap";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

// const theme = createTheme({
//   palette: {
//     neutral: {
//       main: "crimson",
//       contrastText: "#fff",
//     },
//   },
// });

const Forms = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 35,
          // backgroundColor: "#f5f5f5",
        }}
      >
        <Container>
          <div>
            <Typography style={{ fontSize: 28, marginBottom: 20 }}>
              Hi, How can we help you?
            </Typography>
          </div>
          <Row>
            <Col
              sm={12}
              lg={6}
              style={{
                height: "auto",
                position: "relative",
                borderRadius: 10,
                backgroundColor: "white",
                boxShadow: "inherit",
              }}
            >
              <Card>
                <div
                  style={{
                    margin: 30,
                    marginBottom: 8,
                    backgroundColor: "white",
                    minwidth: 400,
                  }}
                >
                  <TextField fullWidth label="Enter your name" id="fullWidth" />
                </div>
                <div
                  style={{
                    margin: 30,
                    marginBottom: 8,
                    backgroundColor: "white",
                    minwidth: 400,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Enter your email"
                    id="fullWidth"
                  />
                </div>
                <div
                  style={{
                    margin: 30,
                    marginBottom: 8,
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

                {/* <ThemeProvider theme={theme}> */}
                <Button
                  color="primary"
                  style={{ marginLeft: 30, marginBottom: 20, width: 200 }}
                  size="large"
                  variant="contained"
                >
                  Submit
                </Button>
                {/* </ThemeProvider> */}
              </Card>
            </Col>
            <Col lg={6} sm={12}>
              <iframe
                frameborder="0"
                scrolling="no"
                height="530"
                width="100%"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14130.948231973627!2d85.34462205!3d27.694520599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1681814921257!5m2!1sen!2snp"
                title="Nepal Can Move kathmandu"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Forms;
