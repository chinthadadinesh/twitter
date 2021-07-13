import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";

function Dashboard() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default Dashboard;