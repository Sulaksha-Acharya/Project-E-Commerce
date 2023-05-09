import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import a from "../asset/a.png";
import b from "../asset/b.png";
import w from "../asset/w.jpeg";
import w3 from "../asset/w3.jpg";
import c from "../asset/c.png";
import ddd from "../asset/ddd.jpg";
import c1 from "../asset/c1.jpg";
import m2 from "../asset/m2.jpg";
import m from "../asset/m.jpg";
import m1 from "../asset/m1.jpg";
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
import ItemCard from "../component/ItemCard";
import Container from "react-bootstrap/Container";
import { Grid, TableHead } from "@mui/material";

export const latestProducts = [
  {
    title: "T-shirt for Women",
    image: w,
    price: 200,
    id: 1,
    category: "latestOutfit",
  },
  {
    title: "T-shirt",
    image: m2,
    price: 800,
    id: 2,
    category: "latestOutfit",
  },
  {
    title: "T-shirt",
    image: c1,
    price: 200,
    id: 3,
  },
  {
    title: "Long Sleeve Sweater",
    image: m,
    price: 300,
    id: 4,
  },
  {
    title: "New Product E",
    image: m2,
    price: 500,
    id: 5,
  },
  {
    title: "New Product F",
    image: m1,
    price: 500,
    id: 6,
  },
  {
    title: "New Product G",
    image: m,
    price: 500,
    id: 7,
  },
  {
    title: "New Product H",
    image: kid4,
    price: 500,
    id: 8,
  },

  {
    title: "New Product I",
    image: del,
    price: 500,
    id: 9,
  },
  {
    title: "New Product J",
    image: ddd,
    price: 500,
    id: 10,
  },
  {
    title: "New Product K",
    image: iphone,
    price: 500,
    id: 11,
  },
  // },
  // {
  //   title: "New Product L",
  //   image: watch,
  //   price: 500,
  //   id: 5,
  // },
  // {
  //   title: "New Product M",
  //   image: kid1,
  //   price: 600,
  //   id: 5,
  // },
  // {
  //   title: "New Product N",
  //   image: kid2,
  //   price: 700,
  //   id: 5,
  // },
  // {
  //   title: "New Product O",
  //   image: kid3,
  //   price: 500,
  //   id: 5,
  // },
  // {
  //   title: "New Product P",
  //   image: kid4,
  //   price: 500,
  //   id: 5,
  // },
  // {
  //   title: "New Product Q",
  //   image: k1,
  //   price: 800,
  //   id: 5,
  // },
  // {
  //   title: "New Product R",
  //   image: g1,
  //   price: 1000,
  //   id: 5,
  // },
  // {
  //   title: "New Product S",
  //   image: k2,
  //   price: 800,
  //   id: 5,
  // },
  // {
  //   title: "New Product S",
  //   image: b6,
  //   price: 700,
  //   id: 5,
  // },
  // {
  //   title: "New Product T",
  //   image: b4,
  //   price: 800,
  //   id: 5,
  // },
  // {
  //   title: "New Product U",
  //   image: b3,
  //   price: 700,
  //   id: 5,
  // },
  // {
  //   title: "New Product U",
  //   image: b5,
  //   price: 500,
  //   id: 6,
  // },
  // {
  //   title: "New Product U",
  //   image: b7,
  //   price: 500,
  //   id: 5,
  // },
];

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

  return (
    <div>
      <div>
        <Container className="mt-5">
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
            <b>Welcome to ShopCart</b>
          </h1>
          <Carousel>
            {carouselItems?.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item?.image}
                  alt="img"
                  width={"100%"}
                  height={380}
                  objectfit="cover"
                />
                <h3>{item?.title}</h3>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
      <Container className="mt-5">
        <div>
          <div style={{ marginBottom: "30px" }}>
            <h1
            // style={{ textAlign: 'center' }}
            >
              See the latest Outfit
            </h1>
            <p
            // style={{ textAlign: 'center' }}
            >
              <i>Explore our New Arrivals</i>
            </p>
          </div>

          {/* <Container style={{ display: "flex", gap: 15 }}> */}
          <Container className="mt-3 mb-5">
            <Grid container spacing={3}>
              {latestProducts?.map((product) => (
                <Grid item xs={2} key={product.title}>
                  <ItemCard product={product} />
                </Grid>
              ))}
            </Grid>
            <h1>Test</h1>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Home;
