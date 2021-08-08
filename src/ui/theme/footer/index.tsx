import { VFC } from 'react'
import styles from 'ui/theme/Styles/footer.module.scss'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import SearchIcon from '@material-ui/icons/Search'
import {
  Box,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'

export const Footer: VFC = () => {
  const history = useHistory()
  const location = useLocation()

  const changePath = (pathName: string) => {
    history.push(pathName)
  }

  return (
    <Box className={styles.root}>
      <Divider />
      <BottomNavigation>
        <BottomNavigationAction
          onClick={() => changePath('/')}
          icon={
            <HomeIcon
              className={
                location.pathname === '/' ? styles.activeicon : styles.icon
              }
              fontSize="large"
            />
          }
        />
        <BottomNavigationAction
          onClick={() => changePath('/location')}
          icon={
            <LocationOnIcon
              className={
                location.pathname === '/location'
                  ? styles.activeicon
                  : styles.icon
              }
              fontSize="large"
            />
          }
        />
        <BottomNavigationAction
          onClick={() => changePath('/search')}
          icon={
            <SearchIcon
              className={
                location.pathname === '/search'
                  ? styles.activeicon
                  : styles.icon
              }
              fontSize="large"
            />
          }
        />
        <BottomNavigationAction
          onClick={() => changePath('/profile')}
          icon={
            <AccountCircleIcon
              className={
                location.pathname === '/profile'
                  ? styles.activeicon
                  : styles.icon
              }
              fontSize="large"
            />
          }
        />
      </BottomNavigation>
    </Box>
  )
}
