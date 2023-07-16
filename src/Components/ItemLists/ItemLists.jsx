import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from 'react';
import { Link } from 'react-router-dom';
import './itemlists.scss';

function ItemLists({ type }) {
    let data;

    // Dynamicaly change the ui content
    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                count: 232,
                icon: (
                    <PermIdentityIcon
                        style={{
                            color: '#FF74B1',
                            backgroundColor: '#FFD6EC',
                        }}
                        className="icon"
                    />
                ),
                link: 'See all users',
                linkto: '/users',
            };
            break;
        case 'orders':
            data = {
                title: 'ORDERS',
                isMoney: false,
                count: 34,

                icon: (
                    <LocalGroceryStoreOutlinedIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#FFF38C',
                        }}
                        className="icon"
                    />
                ),
                link: 'View all orders',
                linkto: '/orders',
            };
            break;
        case 'products':
            data = {
                title: 'PRODUCTS',
                isMoney: true,
                count: 107,
                icon: (
                    <AttachMoneyOutlinedIcon
                        style={{
                            color: '#367E18',
                            backgroundColor: '#A7FFE4',
                        }}
                        className="icon"
                    />
                ),
                link: 'See all products',
                linkto: '/products',
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                count: 444,
                isMoney: true,
                icon: (
                    <PaidOutlinedIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#B1B2FF',
                        }}
                        className="icon"
                    />
                ),
                link: 'See all details',
                linkto: '/',
            };
            break;
        default:
            break;
    }

    return (
        <div className="item_listss">
            <div className="name">
                <p>{data.title}</p>
                <span className="persentage positive">
                    <KeyboardArrowUpIcon />
                    20 %
                </span>
            </div>

            <div className="counts">
                {data.isMoney && <AttachMoneyOutlinedIcon />}
                {data.count}
            </div>

            <div className="see_item">
                <Link to={data.linkto}>
                    <p>{data.link}</p>
                </Link>
                {data.icon}
            </div>
        </div>
    );
}

export default ItemLists;
