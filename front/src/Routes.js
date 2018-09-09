import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import DashboardContainer from './components/dash/DashboardContainer'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
    </Switch>
)

export default Routes;