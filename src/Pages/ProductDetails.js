import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cart-slice'
import { latestProducts } from './Home'
import { useNavigate, useParams } from 'react-router-dom'
import { selectUserInfo } from '../../src/store/user-slice'

import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { toast } from 'react-toastify'

const ProductDetails = ({ match }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const loggedInUser = useSelector(selectUserInfo)

  const dispatch = useDispatch()

  const product = latestProducts.find((p) => p?.id.toString() === id)

  // methods;
  const addToCart = () => {
    if (!loggedInUser) {
      navigate('/login')
      return
    }

    dispatch(
      cartActions.addToCart({
        ...product,
      })
    )
    toast.success('Product has been added to cart')
  }

  return (
    <Container style={{ minHeight: '55vh' }}>
      <Grid
        container
        spacing={2}
        m={5}
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={12} sm={6}>
          <Card>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              sx={{ height: '100%' }}
            >
              <Grid item>
                <CardMedia
                  component='img'
                  image={product.image}
                  alt='Product'
                  sx={{ width: '400px', padding: '20px' }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h5'>{product.title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>Price: {product.price}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>Category: {product.category}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='contained'
                color='primary'
                fullWidth
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductDetails
