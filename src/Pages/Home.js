import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import a from "../asset/a.png";
import b from "../asset/b.png";
import c from "../asset/c.png";
import ddd from "../asset/ddd.jpg";
import k1 from "../asset/k1.jpg";
import k2 from "../asset/k2.jpg";
import g1 from "../asset/g1.jpg";
import kid1 from "../asset/kid1.jpg";
import kid2 from "../asset/kid2.jpg";
import kid3 from "../asset/kid3.jpg";
import kid4 from "../asset/kid4.jpg";
import b5 from "../asset/b5.jpeg";
import b3 from "../asset/b3.jpeg";
import b4 from "../asset/b4.jpg";
import b6 from "../asset/b6.jpeg";
import b7 from "../asset/b7.jpeg";

import watch from "../asset/watch.jpg";
import iphone from "../asset/iphone.jpg";
import nm from "../asset/nm.jpg";
import del from "../asset/del.jpg";
import shoes from "../asset/shoes.jpg";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import ItemCard from "../component/ItemCard";
import { Grid, TableHead } from "@mui/material";

const Home = () => {
  const [addto, setHome] = useState("");

  const navigate = useNavigate();
  const CartPage = () => {
    navigate(`/cart/${addto}`);
  };

  const carouselItems = [
    {
      image: a,
    },
    {
      image: b,
    },
    {
      image: c,
    },
  ];

  const latestProducts = [
    {
      title: "New Product A",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: a,
      price: 200,
      id: 1,
    },
    {
      title: "New Product B",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: ddd,
      price: 2000,
      id: 2,
    },
    {
      title: "New Product C",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: nm,
      price: 200,
      id: 3,
    },
    {
      title: "New Product D",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: shoes,
      price: 300,
      id: 4,
    },
    {
      title: "New Product E",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: kid1,
      price: 500,
      id: 5,
    },
    {
      title: "New Product F",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: kid2,
      price: 500,
      id: 6,
    },
    {
      title: "New Product G",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: kid3,
      price: 500,
      id: 7,
    },
    {
      title: "New Product H",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: kid4,
      price: 500,
      id: 8,
    },

    {
      title: "New Product I",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: del,
      price: 500,
      id: 9,
    },
    {
      title: "New Product J",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: ddd,
      price: 500,
      id: 10,
    },
    {
      title: "New Product K",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: iphone,
      price: 500,
      id: 11,
    },
    {
      title: "New Product L",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: watch,
      price: 500,
      id: 5,
    },
    {
      title: "New Product M",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: kid1,
      price: 500,
      id: 5,
    },
    {
      title: "New Product N",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: kid2,
      price: 500,
      id: 5,
    },
    {
      title: "New Product O",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: kid3,
      price: 500,
      id: 5,
    },
    {
      title: "New Product P",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: kid4,
      price: 500,
      id: 5,
    },
    {
      title: "New Product Q",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: k1,
      price: 500,
      id: 5,
    },
    {
      title: "New Product R",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: g1,
      price: 500,
      id: 5,
    },
    {
      title: "New Product S",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: k2,
      price: 500,
      id: 5,
    },
    {
      title: "New Product S",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: b6,
      price: 500,
      id: 5,
    },
    {
      title: "New Product T",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: b4,
      price: 500,
      id: 5,
    },
    {
      title: "New Product U",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: b3,
      price: 500,
      id: 5,
    },
    {
      title: "New Product U",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: b5,
      price: 500,
      id: 5,
    },
    {
      title: "New Product U",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: b7,
      price: 500,
      id: 5,
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <b>Welcome to ShopCart</b>
      </h1>
      <div>
        <Container>
          <Carousel>
            {carouselItems?.map((item) => (
              <Carousel.Item key={item?.title}>
                <img
                  src={item?.image}
                  alt="img"
                  width={"100%"}
                  height={380}
                  objectfit="cover"
                  fluid
                />
                <h3>{item?.title}</h3>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>
          <b>See the latest Outfit</b>
        </h1>
        <p style={{ textAlign: "center" }}>
          <i>Explore our New Arrivals</i>
        </p>

        <Container style={{ display: "flex", gap: 15 }}>
          <Grid container spacing={3}>
            {latestProducts?.map((product) => (
              <Grid item xs={2} key={product.title}>
                <ItemCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
