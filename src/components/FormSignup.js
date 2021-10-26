import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSumit, errors} = useForm(submitForm, validate);

    return (
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
                <button className="form-input-btn" type='submit'>
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup
