import { VFC } from 'react'
import { Wrapper } from '../Styles/styles'
// import styles from 'ui/theme/Styles/header.module.scss'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'
// import user from 'user_dummy.json'
import MenuIcon from '@material-ui/icons/Menu'
import { ActiveAvatar } from 'components/common/activeAvatar'
import { LoginModal } from 'features/auth/LoginModal'

export const Header: VFC = () => {
  const user = null
  return (
    <Wrapper>
      <MenuIcon fontSize="large" />
      {/* <AccountCircleIcon className={styles.icon} fontSize="large" /> */}
      {user ? <ActiveAvatar image={user} /> : <LoginModal />}
    </Wrapper>
  )
}
