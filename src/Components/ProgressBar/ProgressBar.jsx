import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import css filr
import './progressBar.scss';

function ProgressBar() {
    const percentage = 74;
    return (
        <div className="progress_bar">
            <div className="top">
                <p>Total Revenue</p>
                <MoreVertOutlinedIcon />
            </div>

            <div className="middle">
                <div className="progress">
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={5}
                        className="progress_main"
                    />
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
                        <p>Target</p>
                        <p className="pricee ">
                            <KeyboardArrowDownOutlinedIcon /> $10.4k
                        </p>
                    </div>
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
