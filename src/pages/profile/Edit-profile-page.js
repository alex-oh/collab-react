import React from "react";
import EditProfileView from "../../components/edit-profile-view/Edit-profile-view";
import ProjectSummaryCard from "../../components/project-summary-card";
import APICard from "../../components/api-card/APICard";
import APICards from "../api-finder";
import "./edit-profile-page.css";

function EditProfile() {
  return (
    <div>
      <div className="row profile-header">
        <div className="mt-4 col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center edit-profile-view">
          <h3 style={{ fontSize: "24px", color: "blue" }}>Edit Profile</h3>
          <EditProfileView />
        </div>
        <div className="mt-3 col-xs-8 col-sm-8 col-md-8 col-lg-8 border border-secondary main-content">
          <div className="row username justify-content-center">
            <input type="text" placeholder="Username" className="mt-3" />
          </div>
          <div className="row email justify-content-center">
            <input type="text" placeholder="Email" className="mt-3" />
          </div>
          <div className="row bio justify-content-center">
            <input type="text" placeholder="Bio" className="mt-3" />
          </div>
          <div className="row password justify-content-center">
            <input type="text" placeholder="Password" className="mt-3" />
          </div>
          <button className="btn btn-primary mt-3">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
