import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScheduleComponent from "../components/ScheduleComponent";
import Footer from "../components/Footer";
import ExpertsCard from "../components/ExperCard";
import CommunityInsights from "../components/CommunityInsights";
import FAQ from "../components/FAQ";

const Home = () => {
  const expertsRef = useRef(null);

  const scrollToExperts = () => {
    expertsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onExpertsClick={scrollToExperts} />
      <Hero />
      <ScheduleComponent />
      <section ref={expertsRef}>
        <ExpertsCard />
      </section>
      <CommunityInsights />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
