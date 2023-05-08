import React, { useState } from 'react'
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Card,
  Grid,
  Box,
  Typography,
  FormGroup,
  FormLabel,
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material'
import { Container } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions, selectItemlist } from '../store/cart-slice'

const Checkout = () => {
  const cartItems = useSelector(selectItemlist)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emailAddress: '',
    phoneNumber: '',
    paymentMethod: false,
  })

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target
    const fieldValue = type === 'checkbox' ? checked : value

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // You can add your logic to handle the form submission here
    toast.success('Product has been added to cart')
    navigate('/')
  }
  const totalSum = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0)

  return (
    <div>
      <Container className='py-5 px-3'>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Checkout</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: 10, width: '100%' }}>
              <h4>Place Order</h4>
              <form onSubmit={handleSubmit}>
                <TextField
                  name='firstName'
                  label='First Name'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name='lastName'
                  label='Last Name'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name='address'
                  label='Address'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name='city'
                  label='City'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name='state'
                  label='State'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={formData.state}
                  onChange={handleChange}
                />
                <TextField
                  name='zipCode'
                  label='Zip Code'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={formData.zipCode}
                  onChange={handleChange}
                />
                <TextField
                  name='emailAddress'
                  type='email'
                  label='Email Address'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
                <TextField
                  type='number'
                  name='phoneNumber'
                  label='Phone Number'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <Box pt={3}>
                  <FormLabel component='legend'>Payment Method: </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={'Cash on delivery'}
                          onChange={handleChange}
                          name='Cash on delivery'
                        />
                      }
                      label='Cash on delivery'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={'creditCard'}
                          onChange={handleChange}
                          name='creditCard'
                          disabled
                        />
                      }
                      label='Credit Card'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={'PayPal'}
                          onChange={handleChange}
                          name='PayPal'
                          disabled
                        />
                      }
                      label='PayPal'
                    />
                  </FormGroup>
                </Box>
                <Box mt={5}>
                  <Button type='submit' variant='contained' color='primary'>
                    Place Order
                  </Button>
                </Box>
              </form>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ padding: 10, width: '100%' }}>
              <h4>Order Summary</h4>
              <Card style={{ padding: 10, width: '100%' }}>
                <Table sx={{ minWidth: 250 }}>
                  <TableHead>
                    <TableRow></TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems?.map((product) => (
                      <TableRow
                        key={product.title}
                        sx={{
                          '&:last-child td, &:last-child th': {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          <img
                            style={{
                              width: '220px',
                              height: '140px',
                              objectFit: 'cover',
                              marginRight: 15,
                            }}
                            src={product.image}
                            alt={'productImage'}
                          />

                          {product.title}
                          {/* <TableCell><Checkbox defaultChecked /></TableCell> */}
                        </TableCell>
                        <TableCell component='th' scope='row'>
                          <Typography variant='h6'>RS.</Typography>
                          {product.price}

                          {/* <FaHeart /> */}
                        </TableCell>
                        <TableCell>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}
                          >
                            <button
                              onClick={() =>
                                dispatch(
                                  cartActions.addProductQuantity(product)
                                )
                              }
                            >
                              +
                            </button>
                            {product.quantity}
                            <button
                              disabled={product.quantity <= 1}
                              onClick={() =>
                                dispatch(
                                  cartActions.removeProductQuantity(product)
                                )
                              }
                            >
                              -
                            </button>
                          </div>
                        </TableCell>

                        <TableCell>
                          Rs.
                          {product?.quantity * product?.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <Grid container spacing={2} className='mt-5'>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                      backgroundColor: 'gray',
                      color: '#fff',
                    }}
                  >
                    <Typography variant='h6'>Subtotal:</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                      backgroundColor: 'gray',
                      color: '#fff',
                    }}
                  >
                    <Typography variant='h6'>{totalSum}</Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                      backgroundColor: 'gray',
                      color: '#fff',
                    }}
                  >
                    <Typography variant='h6'>Shipping Fee</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                      backgroundColor: 'gray',
                      color: '#fff',
                    }}
                  >
                    <Typography variant='h6'>200</Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                      backgroundColor: 'green',
                      color: '#fff',
                    }}
                  >
                    <Typography variant='h6'>Total</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                      backgroundColor: 'green',
                      color: '#fff',
                    }}
                  >
                    <Typography variant='h6'>{totalSum + 200}</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Checkout
