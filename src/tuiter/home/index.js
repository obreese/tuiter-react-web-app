import React from "react";
import TuitsList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <WhatsHappening />
      <TuitsList />
    </div>
  );
};
export default Home;
