import { VFC, ReactNode } from 'react'
import { Box } from '@material-ui/core'

interface Props {
  children: ReactNode
}

export const Post: VFC<Props> = ({ children }) => {
  return (
    <Box mb={8} display="flex" flexDirection="column">
      {children}
    </Box>
  )
}
