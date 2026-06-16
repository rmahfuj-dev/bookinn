import React from "react";
import Hero from "./Hero/Hero";
import SearchMenu from "./Hero/SearchMenu";
import TopBook from "./TopBook/TopBook";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <SearchMenu />
      <TopBook />
    </div>
  );
};

export default Home;
