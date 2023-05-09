import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import a from "../asset/a.png";
import b from "../asset/b.png";
import w from "../asset/w.jpeg";
import w3 from "../asset/w3.jpg";
import w1 from "../asset/w1.jpg";
import w4 from "../asset/w4.jpg";
import c from "../asset/c.png";
import m2 from "../asset/m2.jpg";
import m from "../asset/m.jpg";
import k1 from "../asset/k1.jpg";
import k2 from "../asset/k2.jpg";
import E1 from "../asset/E1.jpg";
import kid3 from "../asset/kid3.jpg";
import kid2 from "../asset/kid2.jpg";
import b1 from "../asset/b1.jpg";
import b3 from "../asset/b3.jpeg";
import Iphone14 from "../asset/Iphone14.jpg";
import OnePlus from "../asset/OnePlus.jpg";
import oppoF21spro from "../asset/oppoF21spro.jpg";
import redmin11 from "../asset/redmin11.jpg";
import samsungM13 from "../asset/samsungM13.jpg";
import iphone from "../asset/iphone.jpg";
import HPLaptopX36014a from "../asset/HPLaptopX36014a.jpg";
import z from "../asset/z.jpg";
import s from "../asset/s.jpg";
import Macbook from "../asset/Macbook.jpg";
import headphone from "../asset/headphone.jpg";
import { useNavigate } from "react-router-dom";
import ItemCard from "../component/ItemCard";
import Container from "react-bootstrap/Container";
import { Grid, TableHead } from "@mui/material";

export const latestProducts = [
  {
    title: "T-shirt for Women",
    image: w,
    price: 1000,
    id: 1,
    category: "latestOutfit",
  },
  {
    title: "Shirt",
    image: m2,
    price: 800,
    id: 2,
    category: "latestOutfit",
  },
  {
    title: "T-shirt",
    image: w1,
    price: 400,
    id: 3,
    category: "latestOutfit",
  },
  {
    title: "Long Sleeve Sweater",
    image: w4,
    price: 600,
    id: 4,
    category: "latestOutfit",
  },
  {
    title: "Twin",
    image: w3,
    price: 800,
    id: 5,
    category: "latestOutfit",
  },
  {
    title: "Long Sleeve Sweater",
    image: m,
    price: 790,
    id: 6,
    category: "latestOutfit",
  },
  {
    title: "Whitedress Baby Girl set",
    image: k1,
    price: 750,
    id: 7,
    category: "KidsWear",
  },
  {
    title: "Boys Winter Design Set",
    image: k2,
    price: 900,
    id: 8,
    category: "KidsWear",
  },

  {
    title: "T-shirt&Jeans",
    image: b1,
    price: 800,
    id: 9,
    category: "KidsWear",
  },
  {
    title: "Crop-top with Skirt",
    image: kid3,
    price: 650,
    id: 10,
    category: "KidsWear",
  },
  {
    title: "Winter Set for boy",
    image: b3,
    price: 990,
    id: 11,
    category: "KidsWear",
  },
  {
    title: "White T-shirt with Skirt",
    image: kid2,
    price: 1100,
    id: 12,
  },
  {
    title: "Iphone14",
    image: Iphone14,
    price: 78999,
    id: 13,
    category: "Mobilephones",
  },
  {
    title: "Redmin11",
    image: redmin11,
    price: 17000,
    id: 14,
    category: "Mobilephones",
  },
  {
    title: "OppoF21spro",
    image: oppoF21spro,
    price: 24900,
    id: 15,
    category: "Mobilephone",
  },
  {
    title: "SamsungM13",
    image: samsungM13,
    price: 27000,
    id: 16,
    category: "Mobilephone",
  },
  {
    title: "OnePlus",
    image: OnePlus,
    price: 40000,
    id: 17,
    category: "Mobilephone",
  },
  {
    title: "Iphone 12 Mini",
    image: iphone,
    price: 58000,
    id: 18,
    category: "Mobilephone",
  },
  {
    title: "HPLaptopX36014a",
    image: HPLaptopX36014a,
    price: 70000,
    id: 19,
    category: "Laptop",
  },
  {
    title: "Wired Headphone",
    image: z,
    price: 3000,
    id: 20,
    category: "Laptop",
  },
  {
    title: "Logitech G502 Mouse",
    image: s,
    price: 750,
    id: 21,
    category: "Laptop",
  },
  {
    title: "DEL Laptop",
    image: E1,
    price: 60000,
    id: 22,
    category: "Laptop",
  },
  {
    title: "Mac Apple",
    image: Macbook,
    price: 110000,
    id: 23,
    category: "Laptop",
  },
  {
    title: "ATH-M30x Headphone",
    image: headphone,
    price: 1100,
    id: 24,
    category: "Laptop",
  },
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
