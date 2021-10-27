import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import useForm from './useForm'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const {values} = useForm();

    function submitForm(){
        setIsSubmitted(true)        
    }

    return (
        <div> 
            {!isSubmitted ? (<FormSignup submitForm={submitForm}/>):
            <FormSuccess />}          
        </div>
    )
}

export default Form
