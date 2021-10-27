import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import FormSignin from './FormSignin'

const FormSuccess = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/">
            <div>
                sign up success<br/>
                <Link to="/login">Log in now!</Link>
            </div>
            </Route>
            <Route path="/login">
                <FormSignin />
            </Route>           
            </Switch>
        </Router>
        )
}

export default FormSuccess
