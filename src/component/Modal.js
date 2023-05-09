import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useSelector } from 'react-redux'
import { selectUserInfo } from '../store/user-slice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BasicModal({
  open,
  handleClose = () => {},
  handleAddWishlist = () => {},
}) {
  const loggedInUser = useSelector(selectUserInfo)

  return (
    <div>
      {/* <Button onClick={handleOpen}>Move To Wishlist</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Wishlist
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {loggedInUser
              ? 'Item(s) will be added to wishlist'
              : 'Please login before adding to wishlist.'}
            <div>
              <Button onClick={handleAddWishlist}>
                {loggedInUser ? 'Add' : 'Login'}
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
