import React from 'react';
import Chart from '../../Components/Chart/Chart';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableList from '../../Components/TableList/TableList';
import userPic from '../../Images/man2.jpg';
import './Detail.scss';

function Detail() {
    // const { userId, productId } = useParams();
    return (
        <div className="details">
            <div className="home_sidebar">
                <Sidebar />
            </div>

            <div className="detail_page_main">
                <Navbar />

                <div className="user_info">
                    <div className="user_detail">
                        <img src={userPic} alt="user" className="user_image" />

                        <div className="user_detailss">
                            <p className="name">Name: John</p>
                            <p>Email: johndoe33@gmail.com</p>
                            <p>Address: Berlin, Germany</p>
                            <p>Status: Active</p>
                        </div>
                    </div>

                    <div className="user_chart">
                        <Chart height={390} title="User spending" />
                    </div>
                </div>

                <div className="table">
                    <div className="title">Last Transactions</div>
                    <TableList />
                </div>
            </div>
        </div>
    );
}

export default Detail;
