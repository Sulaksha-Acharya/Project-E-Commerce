import Container from 'react-bootstrap/Container'
import React from 'react'
import imgf from '../asset/imgf.jpg'
import ddd from '../asset/ddd.jpg'
import mnbv from '../asset/mnbv.jpg'
import xyz from '../asset/xyz.jpg'

const About = () => {
  return (
    <div>
      <Container className='mt-5'>
        <img
          className='imgf'
          src={imgf}
          alt='img'
          width={'100%'}
          height={300}
        />
        <div className='mt-5 mb-5'>
          <h1>
            <b>ShopCart is the e-commerce site that serve the people’s need.</b>
          </h1>
          <h6 className='mt-3'>
            ShopCart strives to provide customers the best shopping experience
            in India. The online store is updated daily and new products are
            added every day to cater to all your needs
          </h6>
          <p>
            E-commerce has evolved over the past few years and since it’s easier
            and more convenient, it is evident that customers are actually
            switching to the trend of online shopping. shopping store, brings a
            whole new concept by showcasing a number of famous brands under one
            roof. Not only does it fulfill clothing necessities of both men and
            women but you can also shop for all kinds of appliances like air
            conditioners, heaters, refrigerators, LED TVs and a lot more. Simply
            select your favorite brand like Samsung, Apple, HP, Huawei, Dell,
            Canon, Nikon, etc and get yourself the best electronic items.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default About
