import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from 'react';
import './itemlists.scss';

function ItemLists() {
    //
    return (
        <div className="item_listss">
            <div className="name">
                <p>USERS</p>
                <span className="persentage">
                    <KeyboardArrowUpIcon />
                    20 %
                </span>
            </div>

            <div className="counts">23232</div>

            <div className="see_item">
                <p>See all users</p>
                <PermIdentityIcon />
            </div>
        </div>
    );
}

export default ItemLists;
