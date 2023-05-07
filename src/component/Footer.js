import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import logo from '../asset/logo.png'
import { blue } from '@mui/material/colors'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => (
  <>
    <div
      style={{
        backgroundColor: 'rgba(0, 82, 93, 0.2)',
        display: 'flex',
        marginTop: 50,
      }}
    >
      <Container>
        <Grid container spacing={2} className='py-5'>
          <Grid item xs={12} md={4}>
            <Typography variant='h6'>
              Experience Hassle-Free Online Shopping with ShopCart
            </Typography>
            <Typography color='text.secondary'>
              E-commerce has evolved over the past few years and since it’s
              easier and more convenient, it is evident that customers are
              actually switching to the trend of online shopping. shopping
              store, brings a whole new concept by showcasing a number of famous
              brands under one roof.
            </Typography>
            <Typography style={{ marginRight: 40, marginTop: 20 }}>
              <Link to='/'>
                <img
                  className='logo'
                  src={logo}
                  alt='img'
                  width={150}
                  height={35}
                  style={{ marginRight: 30 }}
                />
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={3}>
            <Typography style={{ marginRight: 5 }}>
              <h5>Top Categories</h5>
              <li> MOBILE PHONES </li>
              <li> CAMERAS</li>
              <li> LATEST GADGETS</li>
              <li> COMPUTER COMPONENTS</li>
              <li> WOMEN'S FASHION</li>
              <li> MEN'S FASHION</li>
            </Typography>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={3}>
            <Typography>
              <h5> 100% ORIGINAL</h5>
              <p color='text.secondary'>
                Guarantee for all product at shopcart.com
              </p>
              <h5> Return within 30days</h5>
              <p>of receiving your order</p>
              <Typography variant='h6' style={{ marginTop: 10 }}>
                Follow Us!
              </Typography>
              <div style={{ gap: '10' }}>
                <a
                  href='https://www.instagram.com'
                  rel='noreferrer'
                  target='_blank'
                  className='SocialMediaIcons'
                >
                  <FaInstagram
                    style={{ color: 'rgb(244, 67, 54)' }}
                    className='me-2'
                    fontSize='25px'
                  />
                </a>
                <a
                  href='https://www.facebook.com'
                  rel='noreferrer'
                  target='_blank'
                  className='SocialMediaIcons'
                >
                  <FaFacebook
                    style={{ color: 'rgb(244, 67, 54)' }}
                    className='me-2'
                    fontSize='25px'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/'
                  rel='noreferrer'
                  target='_blank'
                  className='SocialMediaIcons'
                >
                  <FaLinkedin
                    style={{ color: 'rgb(244, 67, 54)' }}
                    className='me-2'
                    fontSize='25px'
                  />
                </a>
                <a
                  href='https://www.youtube.com/'
                  rel='noreferrer'
                  target='_blank'
                  className='SocialMediaIcons'
                >
                  <FaYoutube
                    style={{ color: 'rgb(244, 67, 54)' }}
                    className='me-2'
                    fontSize='25px'
                  />
                </a>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
    <div
      style={{
        backgroundColor: 'rgb(244, 67, 54)',
        padding: '10px',
      }}
      className='text-center'
    >
      <h6 style={{ textAlign: 'center' }}>
        © 2023 ShopCart - All Right Reserve
      </h6>
    </div>
  </>
)

export default Footer
