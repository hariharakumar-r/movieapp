import React from "react";
import "./Search.css";

 function Search ({ searchInput, search}) {
    return (
      <div className="flex justify-center items-center my-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="block w-3/5 sm:w-3/4 xs:w-5/6 p-4 border-none outline-none bg-white rounded-lg text-dimgrey text-lg font-light transition-shadow duration-400 focus:shadow-lg focus:shadow-blue-500/50"
          onChange={searchInput}
          onKeyUp={search}
        />
      </div>
    );
 }

 export default Search;