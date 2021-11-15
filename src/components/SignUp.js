import React, {useState} from 'react'
import validation from '../validation/validation'
const SignUp = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        setErrors(validation(values))
    }

    const handleChange = (evt) => {
        setValues({
            ...values, [evt.target.name]: evt.target.value
        })
    }
    return (
        <div className='container'>
            <div className='app-wrapper'>
                <h1 className='title'>Create Account</h1>
            </div>

            <form className='form-wrapper'>
                <div className="name">
                    <label className="nlabel">Full Name</label>
                    <input type="text" 
                    className="input" 
                    name='name' 
                    value={values.name}
                    onChange={handleChange}
                    />
                    {errors.name && <p className='error'>{errors.name}</p>}
                </div>
                <div className="email">
                    <label className="elabel">Email</label>
                    <input type="text" 
                    className="input" 
                    name='email' value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="plabel">Password</label>
                    <input type="text" 
                    className="input" 
                    name='password' 
                    value={values.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <div>
                    <button className='subutton' onClick={handleFormSubmit}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
