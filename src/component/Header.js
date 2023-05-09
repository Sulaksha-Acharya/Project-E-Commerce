import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo, userActions } from '../store/user-slice'
import logo from '../asset/logo.png'
import { cartActions, selectItemCount } from '../store/cart-slice'
import { Badge } from 'react-bootstrap'
import Modal from '@mui/material/Modal'

import {
  BsFillCartFill,
  BsFillHeartFill,
  BsFillPersonFill,
  BsFillPersonPlusFill,
  BsBoxArrowInRight,
} from 'react-icons/bs'
import { LinkContainer } from 'react-router-bootstrap'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Box, Typography } from '@mui/material'

const Header = () => {
  const [query, setQuery] = useState('')
  const [showBasicModal, setShowBasicModal] = React.useState(false)

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const cartItemcount = useSelector(selectItemCount)

  const loggedInUser = useSelector(selectUserInfo)

  function logout() {
    dispatch(userActions.logout())
    dispatch(cartActions.clearCart())
    toast.success('Successfully logged out')
    navigate('/')
  }

  function handleSearch(e) {
    e.preventDefault()
    navigate(`/search/item?query=${encodeURIComponent(query)}`)
  }

  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                className='logo'
                src={logo}
                alt='img'
                width={150}
                height={30}
                // style={{ marginBottom: 20 }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto'>
              <Form className='d-flex' onSubmit={handleSearch}>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  className='me-2'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Button variant='outline-success' type='submit'>
                  Search
                </Button>
              </Form>
            </Nav>

            <Nav
              className='my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/WishList'>
                <Nav.Link>
                  <BsFillHeartFill
                    style={{
                      marginRight: '5px',
                      color: 'red',
                      fontSize: '20px',
                    }}
                  ></BsFillHeartFill>
                  Wishlist
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <BsFillCartFill
                    style={{
                      marginBottom: '5px',
                      color: '#002984',
                      fontSize: '20px',
                    }}
                  />{' '}
                  Cart
                  <Badge bg='primary' style={{ marginLeft: '3px' }}>
                    {cartItemcount}
                  </Badge>
                </Nav.Link>
              </LinkContainer>
              {loggedInUser ? (
                <>
                  {/* <NavDropdown title='Profile' id='navbarScrollingDropdown'>
                    <LinkContainer to='/orders'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link
                    onClick={() => {
                      setShowBasicModal(true)
                    }}
                  >
                    <BsBoxArrowInRight
                      style={{
                        marginRight: '5px',
                        color: 'red',
                        fontSize: '20px',
                      }}
                    ></BsBoxArrowInRight>
                    Logout
                  </Nav.Link>
                  <div style={{ padding: '8px', fontWeight: 600 }}>
                    Welcome,{' '}
                    {loggedInUser && loggedInUser.displayName
                      ? loggedInUser.displayName
                      : loggedInUser.email}
                  </div>
                </>
              ) : (
                ''
              )}

              {!loggedInUser && (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <BsFillPersonFill
                        style={{
                          marginBottom: '5px',
                          color: 'red',
                          fontSize: '20px',
                        }}
                      />
                      Log in
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/SignUP'>
                    <Nav.Link>
                      <BsFillPersonPlusFill
                        style={{
                          marginBottom: '5px',
                          marginRight: '2px',
                          color: 'red',
                          fontSize: '20px',
                        }}
                      />
                      Sign up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showBasicModal && (
        <Modal
          open={showBasicModal}
          onClose={setShowBasicModal(false)}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Logout
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Are you sure want to logout ?
              <div>
                <Button
                // onClick={() => logout()}
                >
                  {' '}
                  Logout{' '}
                </Button>
                <Button
                // onClick={setShowBasicModal(false)}
                >
                  Cancel
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  )
}

export default Header
