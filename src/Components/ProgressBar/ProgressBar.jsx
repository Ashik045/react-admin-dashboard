import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Tooltip } from '@mui/material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

// import css filr
import './progressBar.scss';

function ProgressBar() {
    const data01 = [
        { name: 'Users', value: 23 },
        { name: 'Hotels', value: 30 },
        { name: 'Rooms', value: 15 },
        { name: 'Blogs', value: 19 },
        { name: 'Balance', value: 20 },
    ];

    return (
        <div className="progress_bar">
            <div className="top">
                <p>Total Revenue</p>
                <MoreVertOutlinedIcon />
            </div>

            <div className="middle">
                <div className="progress">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#536def"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <p>Total sales made today.</p>
                <p className="price">
                    <AttachMoneyOutlinedIcon style={{ fontSize: '32px' }} />
                    324
                </p>
            </div>

            <div className="bottom">
                <p>Previous transection processing. Last payments may not be included.</p>

                <div className="botom_nested">
                    <div className="nested_nested">
                        <p>Last Week</p>
                        <p className="pricee">
                            <KeyboardArrowUpOutlinedIcon /> $11.9k
                        </p>
                    </div>
                    <div className="nested_nested">
                        <p>Last Month</p>
                        <p className="pricee decrese">
                            <KeyboardArrowUpOutlinedIcon /> $12.4k
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
