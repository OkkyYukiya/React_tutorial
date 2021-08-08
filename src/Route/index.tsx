import { VFC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from 'page'
import { Location } from 'page/location'
import { Layout } from 'ui/Layout'
import { Profile } from 'page/profile'
import { Search } from 'page/search'

export const RoutePage: VFC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/location">
            <Location />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}
