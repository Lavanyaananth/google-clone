import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SearchResultPage from "./Pages/SearchResultPage/SearchResultPage";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route
              exact
              path="/search-result"
              element={<SearchResultPage></SearchResultPage>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
