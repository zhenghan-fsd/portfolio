import React from "react";
import Header from "../headers/Header";
import Service from "../services/Service";
import Pricing from "../services/Pricing";
import Team from "../services/Team";
import Client from "../services/Client";

const HomePage = () => (
  <div>
    <Header />
    <Service />
    <Pricing />
    <Team />
    <Client />
  </div>
);

export default HomePage;
