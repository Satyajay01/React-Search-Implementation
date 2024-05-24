import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div>
      <div className="search-bar-container">
        <SearchBar />
        <div>SearchResult</div>
      </div>
    </div>
  );
};

export default App;
