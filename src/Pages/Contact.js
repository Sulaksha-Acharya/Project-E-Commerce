import React from 'react'
import { Container } from '@mui/system'
import contactus from '../asset/contactus.jpg'
import ContactForm from '../component/ContactForm'
import { Grid, Typography } from '@mui/material'

const Contact = () => {
  return (
    <div>
      <Container className='mt-5'>
        <img
          className='contactus'
          src={contactus}
          alt='img'
          width='100%'
          height={300}
        />

        <Grid container spacing={2} className='mt-5'>
          <Grid item xs={6}>
            <Typography
              style={{ fontSize: 28, marginBottom: 20, marginLeft: '20px' }}
            >
              Hi, How can we help you?
            </Typography>
            <Typography style={{ marginLeft: '20px' }}>
              Send your message, we will get back to yo as soon as possible.
            </Typography>
            <ContactForm />
          </Grid>
          <Grid item xs={6}>
            <iframe
              frameborder='0'
              scrolling='no'
              height='530'
              width='100%'
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14130.948231973627!2d85.34462205!3d27.694520599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1681814921257!5m2!1sen!2snp'
              title='Nepal Can Move kathmandu'
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Contact
