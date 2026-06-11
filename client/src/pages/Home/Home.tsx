import React from "react";
import Hero from "./Hero/Hero";
import SearchMenu from "./Hero/SearchMenu";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <SearchMenu />
    </div>
  );
};

export default Home;
