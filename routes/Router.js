import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'


import HomePage from '../client/components/HomePage'
import CartPage from '../client/components/CartPage'

const Router = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/cart" component={CartPage}/>
    </Switch>
)

export default Router;
