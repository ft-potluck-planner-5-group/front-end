import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import validation from '../validation/validation';
import '../CSS/Login.css';

import axiosWithAuth from "./utils/axiosWithAuth";

const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
})
const [errors, setErrors] = useState({});
const {push} = useHistory()

const formSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values))
    e.preventDefault();
    axiosWithAuth()
    .post('/users/login', values)
    .then(resp=>{
    // console.log("login : resp = ",resp);
    // console.log("login : resp.data = ",resp.data);
    localStorage.setItem('token', resp.data.token);
    push('/potlucks');
    // console.log(this.props)
    })
    .catch(err=>{
    console.log(err);
    })
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
            Username: <input type="text" className='iput' name='username' value={values.username} onChange={inputChange} />
            </label>
            <label>
            {errors.password && <p className='error'>{errors.password}</p>}
            Password: <input type="text" className='iput' name='password' value={values.password} onChange={inputChange} />
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