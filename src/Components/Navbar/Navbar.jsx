import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import LanguageIcon from '@mui/icons-material/Language';
import ListIcon from '@mui/icons-material/List';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

// import sass file
import './navbar.scss';

// import images
import admin from '../../Images/admin_pic.jpg';

function Navbar() {
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
                    <DarkModeOutlinedIcon className="item_icon" />
                </div>
                <div className="item">
                    <FullscreenExitIcon className="item_icon" />
                </div>
                <div className="item">
                    <ListIcon className="item_icon" />
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
