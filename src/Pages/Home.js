import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import a from '../asset/a.png'
import b from '../asset/b.png'
import w from '../asset/w.jpeg'
import w3 from '../asset/w3.jpg'
import w1 from '../asset/w1.jpg'
import w4 from '../asset/w4.jpg'
import c from '../asset/c.png'
import m2 from '../asset/m2.jpg'
import m from '../asset/m.jpg'
import k1 from '../asset/k1.jpg'
import k2 from '../asset/k2.jpg'
import E1 from '../asset/E1.jpg'
import kid3 from '../asset/kid3.jpg'
import kid2 from '../asset/kid2.jpg'
import b1 from '../asset/b1.jpg'
import b3 from '../asset/b3.jpeg'
import Tops from '../asset/Tops.jpg'
import colored from '../asset/colored.jpg'
import Iphone14 from '../asset/Iphone14.jpg'
import OnePlus from '../asset/OnePlus.jpg'
import MenWear from '../asset/MenWear.jpg'
import oppoF21spro from '../asset/oppoF21spro.jpg'
import redmin11 from '../asset/redmin11.jpg'
import samsungM13 from '../asset/samsungM13.jpg'
import iphone from '../asset/iphone.jpg'
import top from '../asset/top.jpg'
import womenfashion from '../asset/womenfashion.jpg'
import disney from '../asset/disney.jpg'
import tshirt1 from '../asset/tshirt1.jpg'
import tshirt2 from '../asset/tshirt2.jpg'
import tshirt3 from '../asset/tshirt3.jpg'
import tshirt from '../asset/tshirt.jpg'
import pshirt from '../asset/pshirt.jpg'
import pshirt2 from '../asset/pshirt2.jpg'
import jacket from '../asset/jacket.jpg'
import white from '../asset/white.jpg'
import pack from '../asset/pack.jpg'
import HPLaptopX36014a from '../asset/HPLaptopX36014a.jpg'
import z from '../asset/z.jpg'
import s from '../asset/s.jpg'
import Macbook from '../asset/Macbook.jpg'
import headphone from '../asset/headphone.jpg'
import { useNavigate } from 'react-router-dom'
import ItemCard from '../component/ItemCard'
import Container from 'react-bootstrap/Container'
import { Grid, TableHead } from '@mui/material'

export const latestProducts = [
  {
    title: 'T-shirt for Women',
    image: w,
    price: 1000,
    id: 1,
    category: 'Latest Outfit',
  },
  {
    title: 'Shirt',
    image: m2,
    price: 800,
    id: 2,
    category: 'Men Fashion',
  },
  {
    title: 'Shirt',
    image: pshirt,
    price: 800,
    id: 38,
    category: 'Men Fashion',
  },
  {
    title: 'Shirt',
    image: tshirt,
    price: 800,
    id: 31,
    category: 'Men Fashion',
  },

  {
    title: 'Shirt',
    image: tshirt3,
    price: 800,
    id: 34,
    category: 'Men Fashion',
  },
  {
    title: 'Shirt',
    image: tshirt2,
    price: 800,
    id: 35,
    category: 'Men Fashion',
  },
  {
    title: 'T-shirt',
    image: w1,
    price: 400,
    id: 26,
    category: 'Latest Outfit',
  },
  {
    title: 'Silk Shirt',
    image: womenfashion,
    price: 890,
    id: 3,
    category: 'Latest Outfit',
  },
  {
    title: 'Short Sleeve Print Shirt ',
    image: colored,
    price: 999,
    id: 32,
    category: 'Latest Outfit',
  },

  {
    title: 'Long Sleeve Sweater',
    image: w4,
    price: 600,
    id: 27,
    category: 'Woman Fashion',
  },
  {
    title: 'Sheer Mesh Crop Tops',
    image: top,
    price: 700,
    id: 29,
    category: 'Woman Fashion',
  },
  {
    title: 'Disney Ladies-Shirt',
    image: disney,
    price: 900,
    id: 33,
    category: 'Woman Fashion',
  },
  {
    title: 'Classic Cropped T-Shirt',
    image: white,
    price: 600,
    id: 28,
    category: 'Woman Fashion',
  },
  {
    title: 'Fit Crop Jean Jacket',
    image: jacket,
    price: 1500,
    id: 28,
    category: 'Woman Fashion',
  },
  {
    title: '5 Pack-Crop Top',
    image: pack,
    price: 2000,
    id: 29,
    category: 'Woman Fashion',
  },
  // {
  //   title: "Long Sleeve Sweater",
  //   image: Tops,
  //   price: 900,
  //   id: 4,
  //   category: "Latest Outfit",
  // },
  {
    title: 'Twin',
    image: w3,
    price: 800,
    id: 5,
    category: 'Latest Outfit',
  },
  {
    title: 'Long Sleeve Sweater',
    image: m,
    price: 790,
    id: 6,
    category: 'Latest Outfit',
  },
  {
    title: 'Whitedress Baby Girl ',
    image: k1,
    price: 750,
    id: 7,
    category: 'Kids Wear',
  },
  {
    title: 'Boys Winter Design Set',
    image: k2,
    price: 900,
    id: 8,
    category: 'Kids Wear',
  },

  {
    title: 'T-shirt&Jeans',
    image: b1,
    price: 800,
    id: 9,
    category: 'Kids Wear',
  },
  {
    title: 'Crop-top with Skirt',
    image: kid3,
    price: 650,
    id: 10,
    category: 'Kids Wear',
  },
  {
    title: 'Winter Set for boy',
    image: b3,
    price: 990,
    id: 11,
    category: 'Kids Wear',
  },
  {
    title: 'White T-shirt with Skirt',
    image: kid2,
    price: 1100,
    id: 12,
    category: 'Kids Wear',
  },
  {
    title: 'Iphone14',
    image: Iphone14,
    price: 78999,
    id: 13,
    category: 'Mobile Phones',
  },
  {
    title: 'Redmin11',
    image: redmin11,
    price: 17000,
    id: 14,
    category: 'Mobile Phones',
  },
  {
    title: 'OppoF21spro',
    image: oppoF21spro,
    price: 24900,
    id: 15,
    category: 'Mobile Phones',
  },
  {
    title: 'SamsungM13',
    image: samsungM13,
    price: 27000,
    id: 16,
    category: 'Mobile Phones',
  },
  {
    title: 'OnePlus',
    image: OnePlus,
    price: 40000,
    id: 17,
    category: 'Mobile Phones',
  },
  {
    title: 'Iphone 12 Mini',
    image: iphone,
    price: 58000,
    id: 18,
    category: 'Mobile Phones',
  },
  {
    title: 'HPLaptopX36014a',
    image: HPLaptopX36014a,
    price: 70000,
    id: 19,
    category: 'Laptop',
  },
  {
    title: 'Wired Headphone',
    image: z,
    price: 3000,
    id: 20,
    category: 'Laptop',
  },
  {
    title: 'Logitech G502 Mouse',
    image: s,
    price: 750,
    id: 21,
    category: 'Laptop',
  },
  {
    title: 'DEL Laptop',
    image: E1,
    price: 60000,
    id: 22,
    category: 'Laptop',
  },
  {
    title: 'Mac Apple',
    image: Macbook,
    price: 110000,
    id: 23,
    category: 'Laptop',
  },
  {
    title: 'ATH-M30x Headphone',
    image: headphone,
    price: 1100,
    id: 24,
    category: 'Laptop',
  },
  {
    title: 'Sweatshirt for Men',
    image: MenWear,
    price: 1500,
    id: 25,
    category: 'Men Fashion',
  },
]

const Home = () => {
  const [addto, setHome] = useState('')

  const navigate = useNavigate()
  const CartPage = () => {
    navigate(`/cart/${addto}`)
  }

  const latestOutfit = latestProducts?.filter(
    (el) => el?.category === 'Latest Outfit'
  )

  const kidsWear = latestProducts?.filter((el) => el?.category === 'Kids Wear')

  const mobilePhones = latestProducts?.filter(
    (el) => el?.category === 'Mobile Phones'
  )

  const Laptop = latestProducts?.filter((el) => el?.category === 'Laptop')

  const menFashion = latestProducts?.filter(
    (el) => el?.category === 'Men Fashion'
  )

  const womanFashion = latestProducts?.filter(
    (el) => el?.category === 'Woman Fashion'
  )

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
  ]

  return (
    <div>
      <div>
        <Container className='mt-5'>
          <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
            <b>Welcome to ShopCart</b>
          </h1>
          <Carousel>
            {carouselItems?.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item?.image}
                  alt='img'
                  width={'100%'}
                  height={380}
                  objectfit='cover'
                />
                <h3>{item?.title}</h3>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
      <Container className='mt-5'>
        {/* Latest Outfit */}
        {latestProducts && latestOutfit.length > 0 ? (
          <>
            <div style={{ marginLeft: '10px' }}>
              <h2>See Our Latest Outfit</h2>
              <p>
                <i>Explore new arrivals outfit </i>
              </p>
            </div>
            <Container className='mt-3 mb-5'>
              <Grid container spacing={3}>
                {latestOutfit?.map((product) => (
                  <Grid item xs={2} key={product.title}>
                    <ItemCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </>
        ) : (
          ' '
        )}

        {/* Latest Outfit End*/}

        {/* Kids Wear */}
        <div style={{ marginLeft: '10px' }}>
          <h2>New Arrivals Kids Wear </h2>
          <p>
            <i>Explore new arrived kids wear</i>
          </p>
        </div>
        <Container className='mt-3 mb-5'>
          <Grid container spacing={3}>
            {kidsWear?.map((product) => (
              <Grid item xs={2} key={product.title}>
                <ItemCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Kids Wear End*/}

        {/* Mobile Phones */}
        <div style={{ marginLeft: '10px' }}>
          <h2>Latest Mobile Phones </h2>
          <p>
            <i>Explore our latest mobiles</i>
          </p>
        </div>
        <Container className='mt-3 mb-5'>
          <Grid container spacing={3}>
            {mobilePhones?.map((product) => (
              <Grid item xs={2} key={product.title}>
                <ItemCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Mobile Phones End*/}

        {/* Laptop */}
        <div style={{ marginLeft: '10px' }}>
          <h2>New Arrival Laptops </h2>
          <p>
            <i>Explore our latest Laptops</i>
          </p>
        </div>
        <Container className='mt-3 mb-5'>
          <Grid container spacing={3}>
            {Laptop?.map((product) => (
              <Grid item xs={2} key={product.title}>
                <ItemCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Laptop End*/}

        {/* Woman's Fashion */}
        <div style={{ marginLeft: '10px' }}>
          <h2>New Arrival Woman's Fashion </h2>
          <p>
            <i>Explore our latest woman's Fashion</i>
          </p>
        </div>
        <Container className='mt-3 mb-5'>
          <Grid container spacing={3}>
            {womanFashion?.map((product) => (
              <Grid item xs={2} key={product.title}>
                <ItemCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Womans Fashion End*/}

        {/* Mans Fashion*/}
        <div style={{ marginLeft: '10px' }}>
          <h2>New Arrival Men's Fashion </h2>
          <p>
            <i>Explore our latest men's fashion</i>
          </p>
        </div>
        <Container className='mt-3 mb-5'>
          <Grid container spacing={3}>
            {menFashion?.map((product) => (
              <Grid item xs={2} key={product.title}>
                <ItemCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Mans Fashion*/}
      </Container>
    </div>
  )
}

export default Home
