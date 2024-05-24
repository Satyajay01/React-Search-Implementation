import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";

const App = () => {

  const [results, setResults] = useState([])
  return (
    <div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <SearchResultList results={results}/>
      </div>
    </div>
  );
};

export default App;
