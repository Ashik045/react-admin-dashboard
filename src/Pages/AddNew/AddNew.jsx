import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import noImage from '../../Images/photo-camera.png';
import './New.scss';

function AddNew() {
    const image = false;
    return (
        <div className="add_new">
            <Sidebar />

            <div className="new_page">
                <Navbar />

                <div className="new_page_main">
                    <div className="new_page_content">
                        <div className="image">
                            <p className="add_new_user">Add new user</p>
                            <img src={image || noImage} alt="" />
                        </div>

                        <div className="form">
                            <div className="form_input">
                                <lable>
                                    <DriveFolderUploadIcon />
                                </lable>
                                <input type="file" name="" id="" />
                            </div>

                            <div className="form_input">
                                <lable>Username</lable>
                                <input type="text" placeholder="Username" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNew;
