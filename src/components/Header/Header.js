import React from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import "./Header.css";
import Search from "../Search/Search";

const Header = () => {
  return (
    <>
      <div className="home-header">
        <div className="header-right">
          <Link to="/"> Gmail</Link>
          <Link to="/">Images</Link>
          <AppsIcon></AppsIcon>
          <Avatar></Avatar>
        </div>
      </div>
      <div className="home-body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
        <div className="home-inputContainer">
          <Search></Search>
        </div>
      </div>
    </>
  );
};
export default Header;
