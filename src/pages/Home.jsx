import React from "react";
import Navbar from "../components/Navbar";
import Fetch from "../components/Fetch";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <Navbar />
      <Search />
      <Fetch />
    </div>
  );
}

export default Home;
