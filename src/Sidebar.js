import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withRouter } from 'react-router-dom';


function Sidebar(props) {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption  active Icon={HomeIcon} text="Home" route='/dashboard' props = {props} />
      <SidebarOption Icon={FavoriteBorderIcon} text="Liked" props = {props}  route='/liked' />
      <SidebarOption Redirect={'/dashboard'} route='/login'  Icon={ExitToAppIcon} text="Logout" props = {props} />
    </div>
  );
}

export default withRouter(Sidebar);
