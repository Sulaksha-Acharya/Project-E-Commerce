import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Product from '../component/Product'
import { useDispatch, useSelector } from 'react-redux'
import {
  cartActions,
  selectItemCount,
  selectItemlist,
} from '../store/cart-slice'
import { Col, Container, Row, Table } from 'react-bootstrap'
import ItemCard from '../component/ItemCard'
import { textAlign } from '@mui/system'
// import { Button } from "@mui/material";
import Button from 'react-bootstrap/Button'
import contact from '../asset/contact.jpg'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { toast } from 'react-toastify'
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material'
// import { FaHeart } from "react-icons/fa";
import { Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import notFound from '../asset/notFound.png'
import { Link } from 'react-router-dom'

const Cart = ({ products, total, onCheckoutClicked }) => {
  const cartItems = useSelector(selectItemlist)
  const [quantity, setQuantity] = useState(0)
  // const hasProducts = products.length > 0;
  // const nodes = hasProducts ? (
  //   products.map((product) => (
  //     <Product
  //       title={product.title}
  //       price={product.price}
  //       quantity={product.quantity}
  //       key={product.id}
  //     />
  //   ))
  // ) : (
  //   <em>Please add some products to cart.</em>
  // );

  const dispatch = useDispatch()

  const addToCart = (product) => {
    toast.success('Product has been added to cart')

    dispatch(
      cartActions.addToCart({
        ...product,
      })
    )
  }

  const totalSum = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0)

  return (
    <div>
      <Container className='mb-5'>
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Your Cart</h2>

        {cartItems && cartItems.length > 0 ? (
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
                            dispatch(cartActions.addProductQuantity(product))
                          }
                        >
                          +
                        </button>
                        {product.quantity}
                        <button
                          disabled={product.quantity <= 1}
                          onClick={() =>
                            dispatch(cartActions.removeProductQuantity(product))
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
          </Card>
        ) : (
          <>
            <Card style={{ padding: 10, width: '100%' }}>
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                <img
                  src={notFound}
                  alt='not found'
                  loading='lazy'
                  width='30%'
                  textAlign='center'
                  alignItems='center'
                />
                <h5 style={{ textAlign: 'center', paddingBottom: '20px' }}>
                  No Product in your cart.
                </h5>
              </div>
            </Card>
          </>
        )}

        <br></br>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}
        >
          <div>
            <Card style={{ padding: 10, width: 300 }}>
              <h4>Order Summary</h4>
              <Typography variant='h6'>Subtotal: {totalSum}</Typography>
              {/* <TableCell>
                Rs.
                {Product?.price * Product?.quantity}
              </TableCell> */}
              <Typography variant='h6'>Shipping Fee: 200</Typography>
              <Typography variant='h6'> Total: {totalSum + 200} </Typography>
            </Card>{' '}
            <br></br>
            <Button
              variant='primary'
              size='lg'
              color='#fff'
              style={{ color: '#fff' }}
            >
              <Link
                to='/checkout'
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                Proceed To Buy
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart
