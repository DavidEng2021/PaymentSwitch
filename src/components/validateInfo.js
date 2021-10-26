export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Username required"
    }

    if(!values.password){
        errors.password = "Password required"
    } else if (values.password.length < 6){
        errors.password = "Password needs to be 6 characters or more"
    }

    // if(!values.password2){
    //     errors.password2 = "Password required"
    // }else if(password2!==password){
    //     errors.password2 = "not match"
    // }

    return errors;
}