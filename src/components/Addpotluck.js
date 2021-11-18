import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import * as yup from 'yup'
// import schema from '../Schema'
import '../CSS/Addpotluck.css'
import axiosWithAuth from './utils/axiosWithAuth';



const initialFormValues = {
    potluck_name: '',
    date: 11182021,
    time: 1112,
    location: '',
}

const initialFormErrors = {
    name: '',
    location: '',
}

const initialDisabled = true


export default function Addpotluck(){

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const {push} = useHistory()



    const postNewItem = newItem => {
        console.log("post Items=", newItem)
        // axiosWithAuth().post('https://backend-potluck-planner.herokuapp.com/api/potlucks', newItem)
        axiosWithAuth().post('https://backend-potluck-planner.herokuapp.com/api/potlucks', newItem)
            .then(response => {
                console.log(response);
                push('/products');
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setFormValues(initialFormValues)
            })
    }

    // console.log("Addpotluck")


    // const validate = (name, value) => {
    //     yup.reach(schema, name)
    //       .validate(value)
    //       .then(() => setFormErrors({...formErrors, [name]: ''}))
    //       .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
    // }

    // useEffect(() => {
    //     schema.isValid(formValues).then(valid => setDisabled(!valid))
    // }, [formValues])

    const submitItem = () => {
        const newItem = {
            potluck_name: formValues.potluck_name, 
            date: formValues.date,
            time: formValues.time,
            location: formValues.location,
        }
        postNewItem(newItem)
    }

    const onSubmit = event => {
        event.preventDefault()
        submitItem()
    }

    const onChange = event => {
        // validate(event.target.name, event.target.value)
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

    return(
        <div id="add-main">
            <div id="one">
                <h1>Add the potluck item below!</h1>
            </div>
            <form className='form add-container 'onSubmit={onSubmit}>
                {/* potluck_name */}
                <div className='form-div'>
                    <div className='label-group'>
                        <h2>Input Potluck Name </h2>
                        <p>Required</p>
                    </div>
                    <label >
                            <input
                                type="text"
                                name="potluck_name"
                                value={formValues.potluck_name}
                                onChange={onChange}
                                placeholder="Potluck Name"
                            />
                    </label>
                </div>

                {/* location */}
                <div className='form-div'>
                    <div className='label-group'>
                        <h2>Location</h2>
                    </div>
                    <label className='location'>
                            <input
                                type="text"
                                name="location"
                                value={formValues.location}
                                onChange={onChange}
                                placeholder="Add Location"
                            />
                            
                    </label> 
                </div>
                <hr/>
                {/* location */}
                <div >
                    <div className=' label-button'>
                        <button >Post Iterm</button>
                    </div>
                </div>
                
            </form>
        </div>

    )
}
