import React from "react";
import Header from "../headers/Header";
import Service from "../services/Service";
import Pricing from "../services/Pricing";
import Team from "../services/Team";
import Client from "../services/Client";
import Contact from "../services/Contact";
import Footer from "../services/Footer";

const HomePage = () => (
  <div>
    <Header />
    <Service />
    <Pricing />
    <Team />
    <Client />
    <Contact />
    <Footer />
  </div>
);

export default HomePage;
