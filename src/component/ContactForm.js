import React, { useState } from 'react'
import { TextField, Button, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { toast } from 'react-toastify'

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
    toast.success('Form Submitted Successfully')
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 35,
        }}
      >
        <Container>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label='Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type='email'
                  label='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Phone Number'
                  type='number'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={5}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' color='primary'>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </div>
  )
}

export default Forms
