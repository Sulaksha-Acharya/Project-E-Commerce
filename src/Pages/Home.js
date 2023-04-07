import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "@mui/material/Modal";
import mn from "../asset/mn.jpg";
import ddd from "../asset/ddd.jpg";
import kid1 from "../asset/kid1.jpg";
import kid2 from "../asset/kid2.jpg";
import kid3 from "../asset/kid3.jpg";
import kid4 from "../asset/kid4.jpg";
import wo from "../asset/wo.jpg";
import ethinic from "../asset/ethinic.jpg";
import img2 from "../asset/img2.jpg";
import watch from "../asset/watch.jpg";
import iphone from "../asset/iphone.jpg";
import onepiece from "../asset/onepiece.jpg";
import nm from "../asset/nm.jpg";
import tshirt from "../asset/tshirt.jpg";
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
      subtitle: "30 % Off",
      image: ethinic,
    },
    { title: "Del Laptop", subtitle: "10 % Off", image: del },
    {
      title: "Shoes for Men Light Sports Fashion Running Shoes",
      subtitle: "10 % Off",
      image: shoes,
    },
  ];

  const latestProducts = [
    {
      title: "New Product A",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: mn,
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

      image: img2,
      price: 500,
      id: 5,
    },
    {
      title: "New Product N",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: img2,
      price: 500,
      id: 5,
    },
    {
      title: "New Product O",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: img2,
      price: 500,
      id: 5,
    },
    {
      title: "New Product P",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: img2,
      price: 500,
      id: 5,
    },
    {
      title: "New Product Q",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: img2,
      price: 500,
      id: 5,
    },
    {
      title: "New Product R",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: img2,
      price: 500,
      id: 5,
    },
    {
      title: "New Product R",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: img2,
      price: 500,
      id: 5,
    },
    {
      title: "New Product R",
      // description:
      //   " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: img2,
      price: 500,
      id: 5,
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <b>Welcome to ShopCart</b>
      </h1>

      <Carousel>
        {carouselItems?.map((item) => (
          <Carousel.Item key={item?.title}>
            <img src={item?.image} alt="img" width={"100%"} height={300} />
            <Carousel.Caption>
              <h3>{item?.title}</h3>
              <p>{item?.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div>
        <h1 style={{ textAlign: "center" }}>
          <b>See the latest Outfit</b>
        </h1>
        <p style={{ textAlign: "center" }}>
          <i>Explore our New Arrivals</i>
        </p>

        <Container style={{ display: "flex", gap: 15 }}>
          <Grid container spacing={2}>
            {latestProducts?.map((product) => (
              <Grid item xs={3} key={product.title}>
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
