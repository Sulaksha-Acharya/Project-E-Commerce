import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions, wishlistItemlist } from '../store/cart-slice'
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
// import { cartActions } from "../store/cart-slice";
// import { cartActions } from "../store/cart-slice";

const ProductDetails = ({ match }) => {
  const [quantity, setQuantity] = useState(1)

  const { id } = useParams()
  const navigate = useNavigate()

  const loggedInUser = useSelector(selectUserInfo)

  const dispatch = useDispatch()

  const product = latestProducts.find((p) => p?.id.toString() === id)

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(product, quantity))
    alert(`${quantity} ${product.name} add to cart`)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

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
    // <div className="product-details">
    //   <p>{product.name}</p>

    //   <img src={product.image} alt={product.name} />
    //   <div className="product-info">
    //     <h2>{product.name}</h2>
    //     <p>{product.description}</p>
    //     <p>Price: ${product.price}</p>
    //     <div className="quantity">
    //       <label htmlFor="quantity">Quantity:</label>
    //       <input
    //         type="number"
    //         id="quantity"
    //         name="quantity"
    //         value={quantity}
    //         onChange={handleQuantityChange}
    //         min="1"
    //       />
    //     </div>
    //     <button onClick={handleAddToCart}>Add to Cart</button>
    //   </div>
    // </div>
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
