/* eslint-disable react/no-array-index-key */
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import blogimg from '../../Images/blog2.jpg';
import './blogdetail.scss';

function BlogDetail() {
    const blogDetail = {
        id: 1,
        img: blogimg,
        title: 'How to cure wanderlust without leaving your home',
        tags: ['Travel', 'Communication', 'Tourist Guide'],
        text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam. Obcaecati animi aspernatur distinctio explicabo consequuntur.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam.',
        ],
        createdAt: new Date().toDateString(),
        views: 122,
    };

    return (
        <div className="blog_details">
            <Sidebar />

            <div className="detail_page_main">
                <Navbar />

                <div className="blog_detailss">
                    <h1>{blogDetail.title}</h1>

                    <img src={blogDetail.img} alt="Travel blogs" className="blog_detail_img" />

                    <div className="blog_detail_tv">
                        <p>
                            <CalendarMonthIcon style={{ marginRight: '3px' }} />
                            {blogDetail.createdAt}
                        </p>
                        <p>
                            <RemoveRedEyeIcon style={{ marginRight: '3px' }} />
                            {blogDetail.views} views
                        </p>
                    </div>

                    {blogDetail.text.map((t) => (
                        <p className="blog_detail_txt">{t}</p>
                    ))}

                    <div className="tags">
                        <h3>Tags:</h3>
                        {blogDetail.tags.map((tag, i) => (
                            <span className="blog_detail_tag" key={i}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
