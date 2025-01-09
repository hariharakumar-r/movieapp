import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Detail from "./components/Detail";
import "./App.css";

function App() {
  const [state, setState] = useState({
    s: "sherlock",
    results: [],
    selected: {},
  });

  const apiurl = "https://www.omdbapi.com/?apikey=145abbf7";

  const searchInput = (e) => {
    const s = e.target.value;
    setState((prevState) => ({ ...prevState, s }));
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        const results = data.Search;
        console.log(results);
        setState((prevState) => ({ ...prevState, results }));
      });
    }
  };

  const openDetail = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      const result = data;
      setState((prevState) => ({ ...prevState, selected: result }));
    });
  };

  const closeDetail = () => {
    setState((prevState) => ({ ...prevState, selected: {} }));
  };

  return (
    <div className="App">
      <header className="w-full pt-8 pb-4">
        <h1 className="text-white text-4xl font-bold text-center">
          Hari's OMDB Movie App
        </h1>
      </header>
      <main className="w-full max-w-[90%] mx-auto">
        <Search searchInput={searchInput} search={search} />
        <div className="container flex flex-wrap justify-center">
          {state.results.map((e) => (
            <div
              key={e.imdbID}
              className="item w-80 text-left m-4 cursor-pointer"
              onClick={() => openDetail(e.imdbID)}
            >
              <img className="w-full h-auto" src={e.Poster} alt={e.Title} />
              <h3 className="text-white text-xl mt-2">{e.Title}</h3>
            </div>
          ))}
        </div>
        {state.selected.Title && (
          <Detail selected={state.selected} closeDetail={closeDetail} />
        )}
      </main>
    </div>
  );
}

export default App;
