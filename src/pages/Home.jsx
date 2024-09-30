import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScheduleComponent from "../components/ScheduleComponent";
import Footer from "../components/Footer";
import ExpertsCard from "../components/ExperCard";
import CommunityInsights from "../components/CommunityInsights";
import FAQ from "../components/FAQ";
const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <ScheduleComponent/>
      <ExpertsCard/>
      <CommunityInsights/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;
