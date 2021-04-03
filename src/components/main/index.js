import { Route, Switch } from 'react-router-dom'
import Courses from '../../pages/Courses'
import Error from './../../pages/Error'
import ShowNavbar from '../../pages/Courses'
import Home from './home'
import Team from '../team/team'
import ContactUs from '../contactUs/contactUs'
import Blog from '../blog/blog'
import FAQ from '../../pages/faq/FAQ'
import PrivacyPolicy from '../../pages/privacyPolicy'

const Index = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/courses'>
          <Courses />
        </Route>
        <Route exact path='/error'>
          <Error />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
        <Route path='/team'>
          <Team />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/FAQ'>
          <FAQ />
        </Route>
        <Route path='/privacy'>
          <PrivacyPolicy />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </>
  )
}

export default Index
