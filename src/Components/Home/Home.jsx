import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Home.scss';

function Home() {
    //
    return (
        <div className="home">
            <Sidebar />

            <div className="home_main">
                <Navbar />
                <h2>Home</h2>
            </div>
        </div>
    );
}

export default Home;
