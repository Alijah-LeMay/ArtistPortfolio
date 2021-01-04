import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// My Screens
import HomeScreen from './screens/HomeScreen'
import GalleryScreen from './screens/GalleryScreen'
import PricingScreen from './screens/PricingScreen'
import ContactScreen from './screens/ContactScreen'
import BlogScreen from './screens/BlogScreen'
import LoginScreen from './screens/LoginScreen'
import AdminScreen from './screens/AdminScreen'
import EditImageScreen from './screens/EditImageScreen'

// Redux
import { Provider } from 'react-redux'
import store from './store'
// Assets
import classes from './App.module.css'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/gallery' component={GalleryScreen} />
            <Route exact path='/pricing' component={PricingScreen} />
            <Route exact path='/contact' component={ContactScreen} />
            <Route exact path='/blog' component={BlogScreen} />
            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/admin' component={AdminScreen} />
            <Route
              exact
              path='/admin/image/:id/edit'
              component={EditImageScreen}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
