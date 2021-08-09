import { VFC, useRef } from 'react'
import styles from 'features/auth/styles/loginModal.module.css'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  TextField,
  Box,
} from '@material-ui/core/'
import {
  closeLoginModal,
  openLoginModal,
  selectIsOpenLoginModal,
} from './authSlice'
import google_logo from 'assets/google-logo.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: 32,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      width: 280,
    },
    signInButton: {
      backgroundColor: '#FF7600',
      color: '#fff',
      fontWeight: 700,
      borderRadius: 30,
    },
    googleSignInButton: {
      backgroundColor: '#fff',
      borderRadius: 30,
    },
    root: {
      '&$focused$notchedOutline': {},
    },
    focused: { border: '1px solid orange' },
    notchedOutline: {},
  })
)

export const LoginModal: VFC = () => {
  const emailElement = useRef(null)
  const passElement = useRef(null)

  const classes = useStyles()
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(selectIsOpenLoginModal)

  const handleOpen = () => {
    dispatch(openLoginModal())
  }

  const handleClose = () => {
    dispatch(closeLoginModal())
  }

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Login
      </Button>
      {/* view modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <h2 className={styles.title}>
              <i>Product Logo</i>
            </h2>
            <TextField
              variant="outlined"
              fullWidth
              type="input"
              placeholder="Email"
              ref={emailElement}
            />
            <Box my={2} />
            <TextField
              variant="outlined"
              fullWidth
              type="password"
              placeholder="Password"
              ref={passElement}
            />
            <Box my={2} />
            <Button className={classes.signInButton} variant="contained">
              Sign In
            </Button>
            <Box my={2} />
            <span>
              Do you have an account?
              <a
                href="/login"
                style={{ color: 'blue', textDecoration: 'none', marginLeft: 3 }}
              >
                SignUp
              </a>
            </span>
            <Box my={2} />
            <Box display="flex" justifyContent="center" alignItems="center">
              <div className={styles.border}></div>
              <Box mx={1} />
              <span className={styles.or}>or</span>
              <Box mx={1} />
              <div className={styles.border}></div>
            </Box>
            <Box my={2} />
            <Button className={classes.googleSignInButton} variant="contained">
              <>
                <img
                  className={styles.google_logo}
                  src={google_logo}
                  alt="google_logo"
                />
                SignIn with google
              </>
            </Button>
            <Box my={2} />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
