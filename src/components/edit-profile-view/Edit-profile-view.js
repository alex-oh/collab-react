import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDescription, updateUserEmail, updateUserPassword } from "./edit-profile-reducer";

import UserIcon from "../../assets/images/profile.png";
import "./Edit-profile-view.css";

function EditProfileView({ user }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(user.description);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const userDescription = useSelector((state) => {
    if (state.user && state.user.currentUser) {
      return state.user.currentUser.description;
    }
    return "";
  });

  const handleEdit = () => {
    setDescription(userDescription);
    setEditing(true);
  };

  const handleCancel = () => {
    setDescription(userDescription);
    setEditing(false);
  };

  const handleSave = () => {
    dispatch(updateUserDescription(description)); // Dispatch the action to update the description in the store
    setEditing(false);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    dispatch(updateUserDescription(e.target.value));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    dispatch(updateUserEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    dispatch(updateUserPassword(e.target.value));
  };

  return (
    <div className="col-8 col-sm-8 col-md-8 col-lg-8 profile-container">
      <h2></h2>
      <img
        src={UserIcon}
        alt="User Icon"
        className="mt-2 rounded-circle profile-user-icon img-fluid"
      />
      <h5 className="mt-3">{user.username}</h5>
      <div className="bio-container">
        {editing ? (
          <div className="">
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              className="col-xs-8 col-sm-8 col-md-8 col-lg-8 bio-input "
              placeholder="Enter a bio"
              style={{ width: "250px", height: "200px" }}
            />

            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="col-xs-8 col-sm-8 col-md-8 col-lg-8 bio-input"
              placeholder="Edit your email"
              style={{ width: "250px", height: "60px" }}
            />

            <input
              type="text"
              value={password}
              onChange={handlePasswordChange}
              className="col-xs-8 col-sm-8 col-md-8 col-lg-8 bio-input"
              placeholder="Edit your password"
              style={{ width: "250px", height: "60px" }}
            />

            <br />
            <button
              className="btn btn-success"
              onClick={handleSave}
              style={{ marginLeft: "5px", marginTop: "15px" }}
            >
              Save
            </button>
          </div>
        ) : (
          <p className="bio-info" style={{ fontSize: "medium" }}>
            {userDescription || "Enter a bio"}
          </p>
        )}
      </div>
      <h6 className="mt-3">{user.email}</h6>

      <button
        onClick={editing ? handleCancel : handleEdit}
        className="btn btn-primary"
      >
        {editing ? "cancel" : "Edit Profile"}
      </button>
    </div>
  );
}

export default EditProfileView;
