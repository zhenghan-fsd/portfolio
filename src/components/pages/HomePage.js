import React from "react";
import Header from "../headers/Header";
import Service from "../services/Service";
import Pricing from "../services/Pricing";
import Team from "../services/Team";
import Client from "../services/Client";
import Contact from "../services/Contact";

const HomePage = () => (
  <div>
    <Header />
    <Service />
    <Pricing />
    <Team />
    <Client />
    <Contact />
  </div>
);

export default HomePage;
