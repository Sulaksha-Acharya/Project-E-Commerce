import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo, userActions } from '../store/user-slice'
import logo from '../asset/logo.png'
import { selectItemCount } from '../store/cart-slice'
import { Badge } from 'react-bootstrap'
import {
  BsFillCartFill,
  BsFillHeartFill,
  BsFillPersonFill,
  BsFillPersonPlusFill,
} from 'react-icons/bs'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  const dispatch = useDispatch()
  const cartItemcount = useSelector(selectItemCount)

  const loggedInUser = useSelector(selectUserInfo)

  function logout() {
    dispatch(userActions.logout())
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
                width={50}
                height={30}
                style={{ marginBottom: 20 }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto'>
              <Form className='d-flex'>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  className='me-2'
                />
                <Button variant='outline-success'>Search</Button>
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
                    style={{ marginRight: '5px', color: 'red' }}
                  ></BsFillHeartFill>
                  Wishlist
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <BsFillCartFill
                    style={{ marginBottom: '5px', color: 'red' }}
                  />{' '}
                  Cart
                  <Badge bg='primary' style={{ marginLeft: '3px' }}>
                    {cartItemcount}
                  </Badge>
                </Nav.Link>
              </LinkContainer>
              {loggedInUser ? (
                <NavDropdown title='Profile' id='navbarScrollingDropdown'>
                  <LinkContainer to='/orders'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                ''
              )}

              {!loggedInUser && (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <BsFillPersonFill
                        style={{ marginBottom: '5px', color: 'red' }}
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
    </div>
  )
}

export default Header
