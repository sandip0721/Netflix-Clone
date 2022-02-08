import React from "react";
import "./App.css";
import requests from "./request";
import Row from "./Row";
function App() {
  return (
    <div className="App">
      Hey prgrammer
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
