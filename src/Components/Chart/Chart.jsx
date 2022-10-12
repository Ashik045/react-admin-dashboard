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

function Chart({ height, title }) {
    return (
        <div className="chart_sec">
            <div>
                <div className="title">
                    <p>{title} (Last 1 year)</p>
                </div>
                <AreaChart
                    width={850}
                    height={height}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="totals" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4665fdce" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#4665fdce" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className="strokee" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#4665fdce"
                        fillOpacity={1}
                        fill="url(#totals)"
                    />
                </AreaChart>
            </div>
        </div>
    );
}

export default Chart;
