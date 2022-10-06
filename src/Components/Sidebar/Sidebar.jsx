import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TableChartIcon from '@mui/icons-material/TableChart';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar() {
    //
    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h3 className="text_none">adminDashboard</h3>
                </Link>
            </div>

            <div className="links">
                <ul>
                    <p className="spann">Main</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" /> Dashboard
                        </li>
                    </Link>

                    <p className="spann">lists</p>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Users
                        </li>
                    </Link>

                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <TableChartIcon className="icon" /> Products
                        </li>
                    </Link>

                    <li>
                        <CreditCardIcon className="icon" /> Orders
                    </li>
                    <li>
                        <BarChartIcon className="icon" /> Status
                    </li>

                    <p className="spann">Seetings</p>
                    <li>
                        <AccountCircleIcon className="icon" /> Profile
                    </li>
                    <li>
                        <SettingsRoundedIcon className="icon" /> Setting
                    </li>
                    <li>
                        <LogoutIcon className="icon" /> Log Out
                    </li>
                </ul>
            </div>

            <div className="colorss">
                <div className="color_option" />
                <div className="color_option" />
            </div>
        </div>
    );
}

export default Sidebar;
