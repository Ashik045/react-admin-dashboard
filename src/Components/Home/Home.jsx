import React from 'react';
import ItemLists from '../ItemLists/ItemLists';
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

                <div className="home_items">
                    <ItemLists />
                    <ItemLists />
                    <ItemLists />
                    <ItemLists />
                </div>
            </div>
        </div>
    );
}

export default Home;
