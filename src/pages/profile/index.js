import React from "react";

// usericon for test
import UserIcon from "../../assets/Image/spacex.jpg";

import "./index.css";

function MainProfile() {
  return (
    <div>
      <div className="row profile-header">
        <div className="col-3 user-img">
          <h2>Profile</h2>
          <img src={UserIcon} alt="User Icon" className="rounded circle profile-user-icon" />
          <h5>john_henley</h5>
          <input type="text" className="profile-user-description" placeholder="User Description / Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna" />
          <h6>john_henley@gmail.com</h6>
        </div>

        <div className="col-8 border border-secondary main-content">
          <h4 className="Active_Project_h4"> Active Projects:</h4>
          <div classname="row Active_Project_Container ">
            <div classname="Project_Name_1">
              <div className="col-4 mt-2 py-2 px-2 w-75 Active_Project_Container_image">

              </div>
              <div className="col-8 Active_Project_Container_text">
                <div>
                  <h7 className="Active_Project_Container_ProjectName">
                    Project Name1
                  </h7>
                </div>
                <div>
                  <input
                    type="text"
                    className="mt-2 py-3 w-100 Active_Project_Container_ProjectDescription"
                    placeholder="Project Description / Building a collaboration platform for Northeastern students Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                  />
                </div>
                <div className="mt-2 py-2 px-2 Active_Project_Container_LookingFor">
                  <h7>Looking for _ designer</h7>
                </div>
              </div>
              <div classname="Project_Name_2">
                <div className="col-4 mt-2 py-2 px-2 w-75 Active_Project_Container_image">

                </div>
                <div className="col-8 Active_Project_Container_text">
                  <div>
                    <h7 className="Active_Project_Container_ProjectName">
                      Project Name2
                    </h7>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="mt-2 py-3 w-100 Active_Project_Container_ProjectDescription"
                      placeholder="Project Description / Building a collaboration platform for Northeastern students Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    />
                  </div>
                  <div className="mt-2 py-2 px-2 Active_Project_Container_LookingFor">
                    <h7>Looking for _ designer</h7>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
