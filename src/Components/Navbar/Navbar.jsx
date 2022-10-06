import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext } from 'react';
import { ColorContext } from '../../ColorContext/darkContext';

// import sass file
import './navbar.scss';

// import images
import admin from '../../Images/admin_pic.jpg';

function Navbar() {
    // color state management using react context
    const { darkMode, dispatch } = useContext(ColorContext);

    return (
        <div className="navbar">
            <div className="search">
                <input type="text" placeholder="Search.." />

                <SearchIcon className="search_icon" />
            </div>

            <div className="item_lists">
                <div className="item">
                    <LanguageIcon className="item_icon" />
                    <p>English</p>
                </div>
                <div className="item">
                    {!darkMode ? (
                        <DarkModeIcon
                            className="item_icon"
                            onClick={() => dispatch({ type: 'TOGGLE' })}
                        />
                    ) : (
                        <LightModeIcon
                            className="item_icon white"
                            onClick={() => dispatch({ type: 'TOGGLE' })}
                        />
                    )}
                </div>
                <div className="item">
                    <FullscreenExitIcon className="item_icon" />
                </div>
                <div className="item">
                    <NotificationsNoneIcon className="item_icon" />
                    <span className="badge">1</span>
                </div>
                <div className="item">
                    <ChatBubbleOutlineIcon className="item_icon" />
                    <span className="badge">2</span>
                </div>

                <div className="item">
                    <img className="admin_pic" src={admin} alt="admin" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
