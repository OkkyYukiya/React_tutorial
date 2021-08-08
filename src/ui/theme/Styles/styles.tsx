import { VFC, ReactNode } from 'react'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
}

export const Wrapper: VFC<Props> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}
