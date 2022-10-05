import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../../Components/DataTable/DataTable';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './userlists.scss';

function Lists({ type }) {
    //
    return (
        <div className="list_page">
            <Sidebar />

            <div className="list_page_main">
                <Navbar />

                {/* mui data table */}
                <div className="data_table">
                    <div className="btnn">
                        <Link to="/users/addnew" style={{ textDecoration: 'none' }}>
                            <button type="button">Add New {type}</button>
                        </Link>
                    </div>

                    <DataTable />
                </div>
            </div>
        </div>
    );
}

export default Lists;
