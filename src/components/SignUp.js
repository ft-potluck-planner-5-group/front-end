import React, {useState} from 'react'
import validation from '../validation/validation'
import '../CSS/SignUp.css'
import axios from 'axios'

const initialValues = {
    username: '',
    password: ''
}

const SignUp = () => {
    const [user, setUser] = useState(initialValues)

    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setUser({
            ...user, [evt.target.name]: evt.target.value
        })
    }

    const postNewUser = evt => {
        axios.post('https://backend-potluck-planner.herokuapp.com/api/users/register', user)
        .then(res => {
            console.log(user)
            console.log(res)
            setUser(initialValues)
        })
        .catch(err => console.error(err))
        console.log('clicked')
        evt.preventDefault()
    }

    
    return (
        <div className='signup-dev'>
            <div className='container'>
                <div className='app-wrapper'>
                    <h1 className='title'>Create Account</h1>
                </div>

                <form className='form-wrapper'>
                    <div className="name">
                    {errors.username && <p className='error'>{errors.username}</p>}
                        <label className="nlabel">Username:</label>
                        <input type="text" 
                        className="input" 
                        name='username' 
                        value={user.username}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="password">
                    {errors.password && <p className='error'>{errors.password}</p>}
                        <label className="plabel">Password:</label>
                        <input type="text" 
                        className="input" 
                        name='password' 
                        value={user.password}
                        onChange={handleChange}
                        />

                    </div>
                    <div>
                        <button className='subutton' onClick={postNewUser}>SIGN UP</button>
                    </div>
                </form>
            </div>

        </div>
  
    )
}

export default SignUp