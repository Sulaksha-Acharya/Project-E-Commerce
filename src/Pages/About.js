import { Container } from "@mui/system";
import React from "react";
import imgf from "../asset/imgf.jpg";
import ddd from "../asset/ddd.jpg";
import mnbv from "../asset/mnbv.jpg";
import xyz from "../asset/xyz.jpg";

const About = () => {
  return (
    <div>
      <Container>
        <img
          className="imgf"
          src={imgf}
          alt="img"
          width={"100%"}
          height={300}
        />

        <h1 style={{ textAlign: "center" }}>
          <b>ShopCart is the e-commerce site that serve the people’s need.</b>
        </h1>
        <p style={{ textAlign: "center" }}>
          ShopCart strives to provide customers the best shopping experience in
          India. The online store is updated daily and new products are added
          every day to cater to all your needs
        </p>
        <img
          className="ddd"
          src={ddd}
          alt="img"
          width={"250"}
          height={200}
          style={{ marginLeft: 10 }}
        />
        <img
          className="mnbv"
          src={mnbv}
          alt="img"
          width={"250"}
          height={200}
          style={{ marginLeft: 100 }}
        />
        <img
          className="xyz"
          src={xyz}
          alt="img"
          width={"250"}
          height={200}
          style={{ marginLeft: 100 }}
        />
      </Container>
    </div>
  );
};

export default About;
