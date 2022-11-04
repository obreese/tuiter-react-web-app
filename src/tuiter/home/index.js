import React from "react";
import TuitList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <WhatsHappening />
      <TuitList />
    </div>
  );
};
export default Home;
