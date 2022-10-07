import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useStateValue } from "../../context/StateProvider";
import useGoogleSearch from "../../hooks/useGoogleSearch";
import { Link } from "react-router-dom";
import MiniNav from "../../components/MiniNav/MiniNav";
import Search from "../../components/Search/Search";
import SearchIcon from "@mui/icons-material/Search";
import RoomIcon from "@mui/icons-material/Room";
import DescriptionIcon from "@mui/icons-material/Description";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ImageIcon from "@mui/icons-material/Image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { actionTypes } from "../../context/reducer";
import "./SearchResultPage.css";

const SearchResultPage = (props) => {
  const [{ term }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState(term);
  const { data } = useGoogleSearch(term);
  console.log(data);
  const search = (e) => {
    //triggering state change
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: searchTerm, //term will be passed and updated in data layer
    });
    setSearchTerm(searchTerm);
  };
  return (
    <div className="search-result-page">
      <Helmet>
        <title> {term} - Search results</title>;
      </Helmet>
      <div className="search-result-page-header">
        <div className="search-result-page-first-menu">
          <Link to="/">
            <img
              className="search-result-page-logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt=""
            ></img>
          </Link>
          <Search></Search>
          <MiniNav></MiniNav>
        </div>

        <div className="search-result-page-header-body">
          <div className="search-result-page-options">
            {/* Options left start*/}
            <div className="search-result-page-options-left">
              <div className="search-result-page-option">
                <SearchIcon></SearchIcon>
                <Link to="/">All</Link>
              </div>
              <div className="search-result-page-option">
                <RoomIcon></RoomIcon>
                <Link to="/">Maps</Link>
              </div>
              <div className="search-result-page-option">
                <DescriptionIcon></DescriptionIcon>
                <Link to="/">News</Link>
              </div>
              <div className="search-result-page-option">
                <OndemandVideoIcon></OndemandVideoIcon>
                <Link to="/">Videos</Link>
              </div>
              <div className="search-result-page-option">
                <ImageIcon></ImageIcon>
                <Link to="/">Videos</Link>
              </div>
              <div className="search-result-page-option">
                <MoreVertIcon></MoreVertIcon>
                <Link to="/">More</Link>
              </div>
            </div>
            {/* Options left end*/}
            {/* Options right start*/}
            <div className="search-result-page-options-right">
              <div className="search-result-page-option">
                <Link to="/">Tools</Link>
              </div>
            </div>
            {/* Options right end*/}
          </div>
        </div>
      </div>
      {/* Results view*/}
      {term && (
        <div className="search-result-page-results">
          <p className="search-result-page-result-count">
            {" "}
            About {data?.searchInformation.formattedTotalResults}results(
            {data?.searchInformation.formattedTime} seconds) for{" "}
            <strong>{term}</strong>
          </p>
          {data?.items.map((item) => (
            <div className="search-result-page-result">
              <a className="search-result-page-result-link" href={item.link}>
                {item.displayLink}
              </a>
              <a
                className="search-result-page-result-title"
                target="_blank"
                href={item.link}
              >
                <h2>{item.title}</h2>
              </a>
              <p className="search-result-page-result-snippet">
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchResultPage;

//AIzaSyBeZO6Tkv-HJ7n9rlK6-2cxRTg0X5L4HXU
