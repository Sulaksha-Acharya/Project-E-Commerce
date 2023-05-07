import React from 'react'
import { FcLike } from 'react-icons/fc'
import { BsCartFill } from 'react-icons/bs'

// import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import {
  Button,
  Card,
  CardActions,
  // CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cart-slice'
import { toast } from 'react-toastify'
import BasicModal from './Modal'
// import Wishlist from '../Pages/Wishlist'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import { Col, Container, Row } from 'react-bootstrap'
import { selectUserInfo, userActions } from '../../src/store/user-slice'

const ItemCard = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loggedInUser = useSelector(selectUserInfo)

  const [showBasicModal, setShowBasicModal] = React.useState(false)

  // methods;
  const addToCart = () => {
    // const handleSignIn = async () => {
    //   signInWithEmailAndPassword(authentication, email, password)
    //     .then((res) => {
    //       dispatch(userActions.loginUser(res.user));
    //       navigate("login");
    //     })

    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
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
  const addToWishlist = () => {
    if (!loggedInUser) {
      navigate('/login')
      return
    }
    dispatch(
      cartActions.addToWishlist({
        ...product,
      })
    )

    setShowBasicModal(false)
    toast.success('Product has been added to wishlist')
  }
  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 120, objectFit: 'cover' }}
          image={product.image}
          title='Laptop'
        />

        <Typography variant='subtitle' component='div' sx={{ px: 1, pt: 1 }}>
          {product.title}
        </Typography>
        <Typography variant='h6' component='div' sx={{ px: 1, pt: 1 }}>
          Rs: {product.price}
        </Typography>

        <Row className='py-2'>
          <Col className='text-left'>
            <IconButton size='small'>
              <FcLike
                onClick={() => {
                  setShowBasicModal(true)
                }}
              />
            </IconButton>
          </Col>
          <Col className='text-right'>
            <IconButton
              size='small'
              onClick={addToCart}
              style={{ color: 'rgb(244, 67, 54)', float: 'right' }}
              className='me-2'
            >
              <BsCartFill />
            </IconButton>
          </Col>
        </Row>
      </Card>

      {showBasicModal && (
        <BasicModal
          open={showBasicModal}
          handleClose={() => setShowBasicModal(false)}
          handleAddWishlist={addToWishlist}
        />
      )}
    </>
  )
}
export default ItemCard
