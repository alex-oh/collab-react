import React from "react";

// usericon for test
import UserIcon from "../../assets/Image/spacex.jpg";

import "./index.css";
import ActiveProjectView from "../../components/active-profile-view/active-project-view";
import EditProfileView from "../../components/edit-profile-view/Edit-profile-view";
import ProjectSummaryCard from "../../components/project-summary-card";


function MainProfile() {
  return (
    <div>
      <div className="row profile-header">
        <div className="col-2 text-center edit-profile-view">
          <EditProfileView />
        </div>

        <div className="col-8 border border-secondary main-content">
          <h4 className="Active_Project_h4"> Active Projects:</h4>
          <div classname="row Active_Project_Container ">
            <div classname="Project_Name_1">
              <div className="col-4 mt-2 py-2 px-2 w-75 Active_Project_Container_image"></div>
              {/* <ActiveProjectView />
              <ActiveProjectView /> */}
              
              <ProjectSummaryCard />
              <br/> 
              <ProjectSummaryCard />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
