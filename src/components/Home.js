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
        <div className="home-text">
            <h1>About</h1>
            <p>Potluck planner is a... sit amet, consectetur adipiscing elit. Vestibulum volutpat, ipsum id vehicula egestas, nulla nisi ultrices lectus, id lacinia velit sapien eleifend lectus. Donec aliquet ligula ut efficitur commodo. Donec diam ligula, congue nec risus sodales, viverra euismod arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac augue imperdiet, ornare lorem a, venenatis velit. Suspendisse ut dapibus dolor. Aliquam euismod nisi a semper malesuada.</p>
            <h2>Login or Sign up to get started</h2>
        </div>
    </div> 
    )
}
export default Home;