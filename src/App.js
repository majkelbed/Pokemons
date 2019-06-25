import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Pokemon from "./Pokemon";
import Cards from "./Cards";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home page</Link>
        <br />
        <Link to="/pokemon">Take me to pokes</Link>
      </header>
      <Router>
        <Cards path="/pokemon" />
        <Pokemon path="/pokemon/:id" />
      </Router>
    </>
  );
}

render(<App />, document.getElementById("root"));
