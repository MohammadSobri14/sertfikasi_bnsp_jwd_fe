"use client";

import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import VisiMisi from "../components/VisiMisi";
import ProfilePerusahaan from "../components/ProfilePerusahaan";
import ProdukJasa from "../components/ProdukJasa";
import Gallery from "../components/Gallery";
import Review from "../components/Review";
import KontakKami from "../components/KontakKami";
import Artikel from "../components/Artikel";
import Event from "../components/Event";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <VisiMisi />
      <ProfilePerusahaan />
      <ProdukJasa />
      <Gallery />
      <Review />
      <KontakKami />
      <Artikel />
      <Event />
    </>
  );
}
