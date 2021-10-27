import React from 'react'
import { useState } from 'react'

function FormSignin() {
    let y = JSON.parse(localStorage.getItem('user'))

    const [isLogin, setIsLogin] = useState(false)

    const [values2, setValues2] = useState({
        username: '',
        password: '',
    })

    const handleSumit2 = e => {
        e.preventDefault()
        //先從local提取所有user 如果提交user包括其中則成功
        //成功則依照其select屬性導向不同支付頁面
        let x = JSON.parse(localStorage.getItem('user'))
        if (values2.username == x.username && values2.password == x.password) {
            setIsLogin(true);
        } else { alert("no account match") }
    };

    const handleChange2 = e => {
        const { name, value } = e.target
        setValues2({
            ...values2,
            [name]: value
        })
    }

    return (
        <div className="wrapper">

            {!isLogin ? (


            <div className="form-content-right">
                <form className="form" onSubmit={handleSumit2}>
                    <h1>Log in</h1>
                    <div className="form-inputs">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input type="text"
                            name="username"
                            className="form-input"
                            id="username"
                            placeholder="Enter your username"
                            value={values2.username}
                            onChange={handleChange2}
                        />
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
                            value={values2.password}
                            onChange={handleChange2}
                        />
                    </div>

                    <button className="form-input-btn" type='submit'>
                        Sign In
                    </button>
                </form>
            </div>
            ): y.select == "PayPal"? "PayPal btn": y.select == "CreditCard"? "CreditCard btn":"error"}
        </div>
    )
}

export default FormSignin
