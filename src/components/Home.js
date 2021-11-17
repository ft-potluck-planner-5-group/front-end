import React from "react";
import '../CSS/Home.css';
import { useHistory } from 'react-router-dom';

const Home = () => {

    const { push } = useHistory();
    const handleClick = () => {
        push('/login');
    }

    return (
        <div className="home-div">
            <h1>Potluck Planner</h1>
            <button className="home-btn" onClick={handleClick} >Login</button>
        </div>
    )
}
export default Home;