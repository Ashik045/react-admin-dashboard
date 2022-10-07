/* eslint-disable no-constant-condition */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import blog1 from '../../Images/blog1.jpg';
import blog2 from '../../Images/blog2.jpg';
import blog3 from '../../Images/blog3.jpg';
import blog4 from '../../Images/blog4.jpg';
import blog5 from '../../Images/book3.jpg';
import blog6 from '../../Images/book5.jpg';
import './blogs.scss';

const userData = [
    {
        id: '630343eb94c2812e4cd7e45d',
        title: 'Want to know how to manage multiple projects at once.',
        author: 'devidbom23',
        image: blog1,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        id: '6303234eb94c2812e4cd7e45e',
        title: 'How to Choose a right product?',
        author: 'john03',
        image: blog2,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        id: 'e40343eb94c2812e4cd7e4233',
        title: 'How do you create a compelling  title',
        author: 'dilvibhasanjohn',
        image: blog4,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        id: '930343eb94c2812e4cd7e45g',
        title: 'How to cure wanderlust without leaving your home?',
        author: 'doejelia88',
        image: blog5,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        id: '60443eb94c2812e4cd7e45ii',
        title: 'The Seven People You Should Always Meet.',
        author: 'lucashossel',
        image: blog6,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        id: 'e23343eb94c2812e4cd7e45kk',
        title: 'Which search queries drive traffic to my website?',
        author: 'anniejhon',
        image: blog3,
        createdAt: new Date(Date.now()).toLocaleString(),
    },
];

function Blogs({ type }) {
    const [data, setData] = useState(userData);

    const handleDlt = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 310,
            renderCell: (param) => (
                <div className="userr">
                    <img src={param.row.image} alt="User Image" className="userr_image" />
                    {param.row.id}
                </div>
            ),
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 400,
            style: { color: 'red' },
        },
        { field: 'author', headerName: 'Author', width: 170 },
        { field: 'createdAt', headerName: 'CreatedAt', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => (
                <div className="actionn">
                    <Link to={params.row.id}>
                        <button type="button" className="view_btn">
                            View
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="delete_btn"
                        onClick={() => handleDlt(params.row.id)}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="blog_page">
            <Sidebar />

            <div className="blog_page_main">
                <Navbar />

                <div className="blog_page_table">
                    <div className="btnn">
                        <Link
                            to={`/${
                                type === 'blog' ? 'blogs' : 'user' ? 'users' : 'products'
                            }/addnew`}
                            style={{ textDecoration: 'none' }}
                        >
                            <button type="button">Add New {type}</button>
                        </Link>
                    </div>
                    <DataGrid
                        className="data_grid"
                        rows={data}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}

export default Blogs;
