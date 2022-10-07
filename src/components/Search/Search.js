import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

import "./Search.css";
const Search = ({ hideButtons = false }, props) => {
  const [{}, dispatch] = useStateValue();
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();

    //triggering state change
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: term, //term will be passed and updated in data layer
    });

    // navigate("/search-result");
    navigate(`/search-result?term=${term}`);
  };
  return (
    <>
      <form className="search">
        <div className="search-input">
          <SearchIcon className="search-inputIcon"></SearchIcon>
          <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
          <MicIcon></MicIcon>
        </div>
        {!hideButtons ? (
          <div className="search-buttons">
            <Button onClick={search} type="submit" variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="search-buttons">
            <Button
              variant="outlined"
              className="search-buttonsHidden"
              type="submit"
              onClick={search}
            >
              Google Search
            </Button>
            <Button
              variant="outlined"
              className="search-buttonsHidden"
              type="submit"
            >
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    </>
  );
};
export default Search;
