import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/servi/Services";
import Recommend from "./components/recommend/Recommend";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Recommend></Recommend>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}

export default App;
