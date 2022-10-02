/* eslint-disable no-underscore-dangle */
import React from 'react';
import './tableList.scss';

// mui table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function TableList() {
    // Replace this data with your own
    const data = [
        {
            _id: 23423343,
            product: 'Programing Book 1',
            image: 'https://www.pexels.com/photo/close-up-photo-of-an-opened-religious-book-1112048/',
            customer: 'Devid John',
            date: '3 October, 2022',
            ammount: 45,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 235343343,
            product: 'Programing Book 2',
            image: 'https://www.pexels.com/photo/close-up-photo-of-an-opened-religious-book-1112048/',
            customer: 'Julia Ani',
            date: '23 April, 2022',
            ammount: 55,
            method: 'Cash On Delivery',
            status: 'Pending',
        },
        {
            _id: 234239873,
            product: 'Programing Book 3',
            image: 'https://www.pexels.com/photo/close-up-photo-of-an-opened-religious-book-1112048/',
            customer: 'John Smith',
            date: '10 October, 2022',
            ammount: 25,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 23423143,
            product: 'Programing Book 4',
            image: 'https://www.pexels.com/photo/close-up-photo-of-an-opened-religious-book-1112048/',
            customer: 'Devid John',
            date: '3 March, 2022',
            ammount: 40,
            method: 'Cash On Delivery',
            status: 'Approved',
        },
        {
            _id: 123423343,
            product: 'Programing Book 5',
            image: 'https://www.pexels.com/photo/close-up-photo-of-an-opened-religious-book-1112048/',
            customer: 'Humlar',
            date: '20 November, 2022',
            ammount: 45,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 2333343,
            product: 'Programing Book 6',
            image: 'https://www.pexels.com/photo/close-up-photo-of-an-opened-religious-book-1112048/',
            customer: 'Devid John',
            date: '12 June, 2022',
            ammount: 28,
            method: 'Cash On Delivery',
            status: 'Pending',
        },
    ];
    return (
        <TableContainer component={Paper} className="table_list">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="table_cell">Tracking Id</TableCell>
                        <TableCell className="table_cell">Product</TableCell>
                        <TableCell className="table_cell">Customer</TableCell>
                        <TableCell className="table_cell">Ammount</TableCell>
                        <TableCell className="table_cell">Date</TableCell>
                        <TableCell className="table_cell">Payment Status</TableCell>
                        <TableCell className="table_cell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row">
                                {row._id}
                            </TableCell>
                            <TableCell className="table_cell">{row.product}</TableCell>
                            <TableCell className="table_cell">{row.customer}</TableCell>
                            <TableCell className="table_cell">{row.ammount}</TableCell>
                            <TableCell className="table_cell">{row.date}</TableCell>
                            <TableCell className="table_cell">{row.method}</TableCell>
                            <TableCell className="table_cell">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableList;
