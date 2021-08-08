import React from 'react'
import LandingPage from './pages/LandingPage'
import Connect from './pages/Connect'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LeaderBoard from './pages/LeaderBoard'
import SellingPage from './pages/SellingPage'

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" component={Connect}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/leaderboard" component={LeaderBoard}/>
          <Route exact path="/sell" component={SellingPage}/>
        </Switch>
      </Router>
    </div>
  )
}

