import { useState, useEffect} from "react";

const useForm = (callback, validate) =>{
    const [values,setValues] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting]= useState(false)

    const handleChange= e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSumit = e =>{
        e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
    }

    useEffect(()=>{
        if(Object.keys(errors).length===0 &&
        isSubmitting){
            callback() //呼叫from Form.js -> FormSignUp.js 之 submitForm
            localStorage.setItem('user', JSON.stringify(values)) //寫入瀏覽器
        }
    },[errors])

    return {handleChange, values, handleSumit, errors}
}

export default useForm;