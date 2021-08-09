import { VFC } from 'react'
import styles from 'features/posts/styles/styles.module.scss'
import { Box, Typography } from '@material-ui/core'
import { ProfileAvatar } from 'components/common/avatar'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import PublishIcon from '@material-ui/icons/Publish'
import Divider from '@material-ui/core/Divider'

interface Props {
  username: string
  photoUrl: string
  description: string
  image: string
}

export const PostDetail: VFC<Props> = ({
  username,
  photoUrl,
  description,
  image,
  // timestamp
}) => {
  const date = new Date()
  const currentTime = date.toDateString()
  return (
    <Box className={styles.root}>
      {/* top component , avatar -> username -> timestamp */}
      <Box mx={0.5} className={styles.top__component} display="flex">
        <Box className={styles.top__left}>
          <ProfileAvatar photoUrl={photoUrl} />
          <Typography variant="body1">{username}</Typography>
        </Box>
        <Box className={styles.top__right}>
          <Box className={styles.datebox}>
            <span className={styles.date}>{currentTime}</span>
          </Box>
          <Box mx={1} />
          <MoreHorizIcon />
        </Box>
      </Box>
      {/* middle component , description -> image */}
      <Box
        className={styles.middle__component}
        display="flex"
        flexDirection="column"
        mx={0.5}
      >
        <Box mx={1}>
          <Typography variant="body1">{description}</Typography>
        </Box>
        <img className={styles.main__image} src={image} alt="posts" />
      </Box>
      {/* under-image , favorite -> commnets */}
      <Box my={1} mx={2} className={styles.under__component}>
        <Box className={styles.icon__count}>
          <FavoriteBorderIcon />
          <span className={styles.count}>12.0k</span>
        </Box>
        <Box className={styles.icon__count}>
          <ChatOutlinedIcon />
          <span className={styles.count}>12.0k</span>
        </Box>
        <PublishIcon />
      </Box>
      <Divider />
    </Box>
  )
}
