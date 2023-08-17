import React from "react";
import "./active-profile-view.css"


function ActiveProjectView() {
  return (
    <div className="col-8 Active_Project_Container_text">
      <div>
        <h7 className="Active_Project_Container_ProjectName">Project Name2</h7>
      </div>
      <div>
        <input
          type="text"
          className="mt-2 py-3 w-100 Active_Project_Container_ProjectDescription"
          placeholder="Project Description / Building a collaboration platform for Northeastern students Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
        />
        <div className="username-posthr text-right">
          <div>@username</div>
          <div className="subtext">Posted 1 hr ago</div>
        </div>
      </div>
      <div className="mt-2 py-5 px-2 Active_Project_Container_LookingFor">
        <h7>Looking for _ designer</h7>
      </div>
    </div>
  );
}

export default ActiveProjectView;
