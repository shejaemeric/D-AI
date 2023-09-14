import React from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Cta from "../components/cta/Cta";
import Carousel from "../components/carousel/Carousel";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { Stack } from "@mui/material";

function Home() {
  return (
    <div style={{ overflowX: "clip" }}>
      <Stack spacing={15}>
        <Header />
        <Carousel />
        <Cta />
        <About />
        <Contact />
        <Footer />
      </Stack>
    </div>
  );
}

export default Home;
