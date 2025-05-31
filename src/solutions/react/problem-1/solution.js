import React from "react";

const ProfileCard = () => (
  <div className="profile-card">
    <img src="avatar.jpg" className="profile-img" alt="Profile" />
    <h2 className="name">John Doe</h2>
    <p className="title">Software Developer</p>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" />
    <div style={{ color: "blue", fontSize: "16px" }}>Contact Info</div>
  </div>
);

export default ProfileCard;
