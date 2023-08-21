import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDescriptionThunk, updateUserEmailThunk, updateUserPasswordThunk } from "../../redux-services/users/user-thunks";
import { loginThunk } from "../../redux-services/auth/auth-thunks";

import UserIcon from "../../assets/images/profile.png";
import "./Edit-profile-view.css";

function EditProfileView({ user }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(user.description);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [errorMessage, setErrorMessage] = useState(null);

  const username = useSelector((state) => {
    if (state.user && state.user.currentUser) {
      return state.user.currentUser.username;
    }
    return "";
  });

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

  const handleSave = async (e) => {
  
    try {
      const response = await dispatch(loginThunk({ username, password }));
      console.log(response);
      dispatch(updateUserDescriptionThunk({ username, description }));
      dispatch(updateUserEmailThunk({ username, email }));
      dispatch(updateUserPasswordThunk({ username, password }));
  } catch (error) {
      setErrorMessage("Error updating profile");
      console.error(error);
  }
  setEditing(false);
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
              onChange={(e) => setDescription(e.target.value)}
              className="mt-4col-xs-8 col-sm-8 col-md-8 col-lg-8 bio-input "
              placeholder="Enter a bio"
              style={{ width: "250px", height: "200px" }}
            />

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-4 col-xs-8 col-sm-8 col-md-8 col-lg-8 bio-input"
              placeholder="Edit your email"
              style={{ width: "250px", height: "60px" }}
            />

            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-4 col-xs-8 col-sm-8 col-md-8 col-lg-8 bio-input"
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
