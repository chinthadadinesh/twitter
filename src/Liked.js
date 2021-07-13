import React from "react";
import Sidebar from "./Sidebar";
import LikedFeed from "./LikedFeed";
import "./App.css";

function Liked() {
  return (
    <div className="app">
      <Sidebar />
      <LikedFeed />
    </div>
  );
}

export default Liked;