import React from "react";
import { useAuth } from "../hooks/useAuth";
import pic from "./../style/elyse.png";

const Dashboard = () => {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  }
  return (
    <div className="ui container" style={{ minHeight: "77vh" }}>
      <h2>Dashboard</h2>
      <h3>Welcome, {auth.user.name} </h3>
      <div className="ui segment big" style={{ height: "340px" }}>
        <img className="ui medium rounded left floated image" alt="profile-img" src={pic}></img>
        <div className="ui header">
          {(auth.user.name).toUpperCase()}
        </div>
        Email: {auth.user.email}
        <div>
          <button style={{ marginTop: "10px" }} className="ui red button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div >
  );
}

export default Dashboard;