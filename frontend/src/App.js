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
import EditBlogScreen from './screens/EditBlogScreen'
import BlogPostScreen from './screens/BlogPostScreen'

// Redux
import { Provider } from 'react-redux'
import store from './store'
// Assets
import classes from './App.module.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/gallery' component={GalleryScreen} />
            <Route exact path='/pricing' component={PricingScreen} />
            <Route exact path='/contact' component={ContactScreen} />
            <Route exact path='/blog' component={BlogScreen} />
            <Route exact path='/blog/:id' component={BlogPostScreen} />

            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/admin' component={AdminScreen} />
            <Route
              exact
              path='/admin/image/:id/edit'
              component={EditImageScreen}
            />
            <Route
              exact
              path='/admin/blog/:id/edit'
              component={EditBlogScreen}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
