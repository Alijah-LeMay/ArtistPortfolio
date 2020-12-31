import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// My Screens
import HomeScreen from './screens/HomeScreen'
import GalleryScreen from './screens/GalleryScreen'
import PricingScreen from './screens/PricingScreen'
import ContactScreen from './screens/ContactScreen'
import BlogScreen from './screens/BlogScreen'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/gallery' component={GalleryScreen} />
          <Route exact path='/pricing' component={PricingScreen} />
          <Route exact path='/contact' component={ContactScreen} />
          <Route exact path='/blog' component={BlogScreen} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
