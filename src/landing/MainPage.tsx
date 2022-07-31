import React from "react";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Video from "./Video";
import About from "./About";
import Reviews from "./Reviews";
import Details from "./Details";
import Features from "./Features";

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Details />
      <Features />
      <Video />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
};
export default MainPage;
