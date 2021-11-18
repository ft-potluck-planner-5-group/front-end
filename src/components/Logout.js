import React,{useEffect}  from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';
const Logout = (props)=> {
    const {push} = useHistory()
    useEffect(() =>{
        const token = localStorage.getItem("token")
        localStorage.removeItem('token')
        push('./login')
    }, [])
    
    return(<div></div>);
}

export default Logout;