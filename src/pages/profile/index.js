import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
// usericon for test
import UserIcon from "../../assets/Image/spacex.jpg";

import "./index.css";

import EditProfileView from "../../components/edit-profile-view/Edit-profile-view";
import ProjectSummaryCard from "../../components/project-summary-card";
import APICard from "../../components/api-card/APICard";
import APICards from "../api-finder";

function MainProfile() {
  return (
    <div>
      <div className="row profile-header">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center edit-profile-view">
          <EditProfileView />
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 border border-secondary main-content">
          <h4 className="Active_Project_h4"> Active Projects:</h4>
          <div classname="row Active_Project_Container ">
            <div classname="Project_Name_1">
              <div className="col-4 mt-2 py-2 px-2 w-75 Active_Project_Container_image"></div>
              {/* <ActiveProjectView />
              <ActiveProjectView /> */}

              <ProjectSummaryCard />
              <br />
              <ProjectSummaryCard />
            </div>
          </div>
        </div>
      </div>
      <div className="bookmarks-container">
        <h4 className="mt-4 float-left bookmarks-h4">Bookmarks:</h4>
        <div className="row mt-4 bookmarks-row">
          <div className="col-md-4 mb-4">
            <APICard api={APICards} />
          </div>
          <div className="col-md-4 mb-4">
            <APICard api={APICards} />
          </div>
          <div className="col-md-4 mb-4">
            <APICard api={APICards} />
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default MainProfile;
