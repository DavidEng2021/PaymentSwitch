import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import FormSignin from './FormSignin';

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSumit, errors} = useForm(submitForm, validate);

    return (
        <Router>
        <Switch>
        <Route exact path="/">
        <div className="form-content-right">
            <form className="form" onSubmit={handleSumit}>
                <h1>Create your account</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input type="text"
                        name="username"
                        className="form-input"
                        id="username"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Passward
                    </label>
                    <input type="password"
                        name="password"
                        className="form-input"
                        id="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                
                <div className="form-inputs">
                    <label htmlFor="select" className="form-label">
                        Type Select
                    </label>                   
                    <select 
                        name="select"
                        className="form-input"
                        id="select"
                        onChange={handleChange}
                        >
                        <option value="PayPal">PayPal</option>
                        <option value="CreditCard">CreditCard</option>
                    </select>                
                </div>
                
                <button className="form-input-btn" type='submit'>
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <Link to="/login2">here</Link>
                </span>
            </form>
        </div>
        </Route>
        <Route path="/login2">
            <FormSignin />
        </Route>
        </Switch>
        </Router>
    )
}

export default FormSignup
