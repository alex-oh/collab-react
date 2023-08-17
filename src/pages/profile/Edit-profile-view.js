import React from "react";
import UserIcon from "../../assets/Image/spacex.jpg";
import "./Edit-profile-view.css"

function EditProfileView() {
    return (
        <div className="col-3 profile-container">
        <h2>Profile</h2>
        <img src={UserIcon} alt="User Icon" className="mt-2 rounded circle profile-user-icon" />
        <h5 className="mt-3 ">john_henley</h5>
        <input type="text" className="mt-2 py-3 profile-user-description" placeholder="User Description / Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna" />
        <h6 className="mt-3">john_henley@gmail.com</h6>
        </div>
    )
}

export default EditProfileView;