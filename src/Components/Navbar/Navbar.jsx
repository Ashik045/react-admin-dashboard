import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import LanguageIcon from '@mui/icons-material/Language';
import ListIcon from '@mui/icons-material/List';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

// import sass file
import './navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="search">
                <input type="text" placeholder="Search.." />

                <SearchIcon className="search_icon" />
            </div>

            <div className="item_lists">
                <LanguageIcon />
                <p>English</p>
                <DarkModeOutlinedIcon />
                <FullscreenExitIcon />
                <NotificationsActiveIcon />
                <ChatBubbleIcon />
                <ListIcon />
            </div>
        </div>
    );
}

export default Navbar;
