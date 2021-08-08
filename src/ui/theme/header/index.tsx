import { VFC } from 'react'
import { Wrapper } from '../Styles/styles'
// import styles from 'ui/theme/Styles/header.module.scss'
import MenuIcon from '@material-ui/icons/Menu'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { ActiveAvatar } from 'components/common/avatar'
import user from 'user_dummy.json'

export const Header: VFC = () => {
  return (
    <Wrapper>
      <MenuIcon fontSize="large" />
      {/* <AccountCircleIcon className={styles.icon} fontSize="large" /> */}
      <ActiveAvatar image={user.user.dispaly_img} />
    </Wrapper>
  )
}
