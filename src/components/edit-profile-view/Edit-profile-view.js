import React from "react";
import UserIcon from "../../assets/images/profile.png";
import "./Edit-profile-view.css";

function EditProfileView() {
    
    return (
        <div className="col-8 col-sm-8 col-md-8 col-lg-8 profile-container">
            <h2></h2>
            <img
                src={UserIcon}
                alt="User Icon"
                className="mt-2 rounded-circle profile-user-icon"
            />
            <h5 className="mt-3">john_henley</h5>
            <div className="bio-container">
                <p className="bio-info">
                    User Description Lorem ipsum dolor sit amet, consectetur
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna
                </p>
            </div>
            <h6 className="mt-3">john_henley@gmail.com</h6>
        </div>
    );
}

export default EditProfileView;
