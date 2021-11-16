import React, { useState } from "react";
import validation from '../validation/validation';
import '../CSS/Login.css';

const Login = () => {
    const [values, setValues] = useState({
        name: '',
        password: ''
})
const [errors, setErrors] = useState({});

const formSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validation(values))
}

const inputChange = (evt) => {
    setValues({
        ...values, [evt.target.name]: evt.target.value
    })
}
return (
<div className='login-dev'>    
    <div className='box'>
        <div className='app-wrap'>
            <h1>Login</h1>
        </div>
        <form className='form-wrap'>
            <label>
            {errors.name && <p className='error'>{errors.name}</p>}
            Username: <input type="text" className='iput' name='name' value={values.name} onChange={inputChange} />
            </label>
            <label>
            {errors.password && <p className='error'>{errors.password}</p>}
            Password: <input type="text" className='iput' name='name' value={values.password} onChange={inputChange} />
            </label>
        </form>
        <div>
            <button className='button' onClick={formSubmit}>Login!</button>
        </div>
    </div>
</div>    
    )
}
export default Login