import React from "react";
import UserIcon from "../../assets/images/profile.png";
import "./Edit-profile-view.css";

function EditProfileView({ user }) {
    return (
        <div className="col-8 col-sm-8 col-md-8 col-lg-8 profile-container">
            <h2></h2>
            <img
                src={UserIcon}
                alt="User Icon"
                className="mt-2 rounded-circle profile-user-icon"
            />
            <h5 className="mt-3">{user.username}</h5>
            <div className="bio-container">
                <p className="bio-info">user description here</p>
            </div>
            <h6 className="mt-3">{user.email}</h6>

            <button className="btn btn-primary">Edit Profile</button>
        </div>
    );
}

export default EditProfileView;
