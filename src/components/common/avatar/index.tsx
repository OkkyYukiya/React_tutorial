import { VFC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      border: '1px solid grey',
    },
  })
)

interface Props {
  photoUrl: string
}

export const ProfileAvatar: VFC<Props> = ({ photoUrl }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Avatar className={classes.large} alt="Remy Sharp" src={photoUrl} />
    </div>
  )
}
