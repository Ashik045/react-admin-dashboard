import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from 'recharts';

// import css file
import './chart.scss';

// Place your own data here
const data = [
    {
        name: 'January',
        total: 700,
    },
    {
        name: 'February',
        total: 1250,
    },
    {
        name: 'March',
        total: 1410,
    },
    {
        name: 'April',
        total: 1100,
    },
    {
        name: 'May',
        total: 700,
    },
    {
        name: 'June',
        total: 1000,
    },
    {
        name: 'July',
        total: 1250,
    },
    {
        name: 'August',
        total: 1050,
    },
    {
        name: 'September',
        total: 800,
    },
    {
        name: 'October',
        total: 960,
    },
    {
        name: 'November',
        total: 1150,
    },
    {
        name: 'December',
        total: 1250,
    },
];

function Chart() {
    return (
        <div className="chart_sec">
            <div>
                <div className="title">
                    <p>Last 1 year (Revenue)</p>
                </div>
                <AreaChart
                    width={800}
                    height={450}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="totals" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="strokee" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#totals)"
                    />
                </AreaChart>
            </div>
        </div>
    );
}

export default Chart;
