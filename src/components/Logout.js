import React,{useEffect}  from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';
const Logout = (props)=> {
    // console.log("Logout  props = ", props);
    // console.log("Logout  props.history = ", props.history );
    // console.log("Logout  history = ", useHistory());
    const {push} = useHistory()
    useEffect(() =>{
    const token = localStorage.getItem("token")
    console.log("token = ", token)
        // axiosWithAuth()
        // .post('/logout')
        // .then(resp => {
        //     console.log("Logout  resp = ", resp);
            localStorage.removeItem('token')
            push('./login')
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }, [])
    
    return(<div></div>);
}

export default Logout;