import { Route, Switch } from 'react-router-dom'
import Error from './../../pages/Error'

import Home from './home'
const Index = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </>
  )
}

export default Index
