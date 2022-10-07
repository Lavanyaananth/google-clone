import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import "./MiniNav.css";
const MiniNav = () => {
  return (
    <>
      <div className="mininav-header">
        <div className="mininav-right">
          <SettingsIcon></SettingsIcon>
          <AppsIcon></AppsIcon>
          <Avatar></Avatar>
        </div>
      </div>
    </>
  );
};

export default MiniNav;
