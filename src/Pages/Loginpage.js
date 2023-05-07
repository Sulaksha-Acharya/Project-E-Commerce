import { Container } from '@mui/system'
import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import { collection, setDoc, doc, getFirestore } from 'firebase/firestore'
import {
  auth,
  authentication,
  currentUser,
  provider,
  // signInWithPopup,
} from '../config/firebase'
import { loginUser } from '../store/user-slice'
// import { GoogleLoginButton } from "react-social-login-buttons";

import 'firebase/auth'
import firebase from 'firebase/compat/app'
import { signInWithPopup } from 'firebase/auth'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { selectUserInfo, userActions } from '../store/user-slice'
import { useDispatch, useSelector } from 'react-redux'
import App from '../App'
import SignUpPage from './SignUpPage'
import { FcGoogle } from 'react-icons/fc'
import { Button, Typography } from '@mui/material'
import { toast } from 'react-toastify'

const Loginpage = () => {
  const navigate = useNavigate()
  // const [user] = useState("");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const db = getFirestore(App)
  const dispatch = useDispatch()
  const userDetail = useSelector(selectUserInfo)

  const handleSignIn = async () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        dispatch(userActions.loginUser(res.user))
        navigate('/')
        toast.success('Successfully logged in')
      })

      .catch((err) => {
        console.log(err)
      })
  }

  const [user, setUser] = useState(null)

  const handleGoogleSignIn = async () => {
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

    try {
      const result = await signInWithPopup(auth, provider)
      dispatch(userActions.loginUser(result.user))

      navigate('/')
      toast.success('Successfully logged in')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div style={{ backgroundColor: 'lightgray', padding: 50 }}>
      <div>
        <h3 style={{ textAlign: 'center' }}>
          Welcome to ShopCart! Please Login
        </h3>
        <Container
          style={{
            maxWidth: 500,
            padding: 50,
            backgroundColor: 'white',
            borderRadius: 10,
          }}
        >
          {Error && (
            <div style={{ color: 'red', marginBottom: '10px' }}>
              {Error?.message}
            </div>
          )}
          {error && (
            <div style={{ color: 'red', marginBottom: '10px' }}>
              {error?.message}
            </div>
          )}

          <div>
            {user ? (
              <div>
                <h2>Welcome, {user.displayName}!</h2>
                <p>Your email address is {user.email}.</p>
              </div>
            ) : (
              ''
            )}
          </div>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>

            <div style={{ textAlign: 'center' }}>
              <Button variant='contained' onClick={handleSignIn}>
                Login
              </Button>
            </div>

            <div>
              <Typography
                style={{
                  marginTop: 30,
                  marginBottom: 20,
                  textAlign: 'center',
                  fontSize: 14,
                  color: '#6C757D',
                }}
              >
                If you don't have an account, please{' '}
                <Link to={`/signup`} style={{ color: '#dc1e3e' }}>
                  Sign Up
                </Link>
              </Typography>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Button variant='outlined' onClick={handleGoogleSignIn}>
                <FcGoogle style={{ margin: 5, fontSize: 20 }} />
                Login with Google
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  )
}
export default Loginpage
