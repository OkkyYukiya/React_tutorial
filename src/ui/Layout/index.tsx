import { VFC, ReactNode } from 'react'
import { Header } from '../theme/header'
import { Footer } from '../theme/footer/index'

interface Props {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
