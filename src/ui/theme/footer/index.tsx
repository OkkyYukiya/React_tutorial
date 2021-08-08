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

export const Footer: VFC = () => {
  return (
    <Box className={styles.root}>
      <Divider />
      <BottomNavigation>
        <BottomNavigationAction icon={<HomeIcon fontSize="large" />} />
        <BottomNavigationAction icon={<LocationOnIcon fontSize="large" />} />
        <BottomNavigationAction icon={<SearchIcon fontSize="large" />} />
        <BottomNavigationAction icon={<AccountCircleIcon fontSize="large" />} />
      </BottomNavigation>
    </Box>
  )
}
