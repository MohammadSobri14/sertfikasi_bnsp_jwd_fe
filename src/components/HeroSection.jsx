"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full bg-[#0A2025] py-9 px-8">
      <div className="mx-auto flex flex-col items-center lg:flex-row justify-center gap-10 py-40 max-w-[1440px] bg-no-repeat">
        {/* Konten Kiri */}
        <div className="w-[660px] flex-col justify-center items-start gap-20 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-5 flex">
            <h1 className="self-stretch text-white text-5xl font-bold font-['Roboto'] leading-snug">
              Menyatukan Gairah & Mesin{" "}
              <span className="text-orange-500">Klub Motor Kami</span>
            </h1>
            <p className="self-stretch text-white text-xl font-normal font-['Roboto'] leading-relaxed">
              Selamat datang di komunitas pecinta motor Harley Davidson. Di
              sini, kebebasan berkendara bertemu dengan persaudaraan sejati.
              Gabung sekarang dan jadilah bagian dari perjalanan luar biasa
              kami.
            </p>
          </div>
        </div>

        {/* Gambar Kanan - Logo Harley Davidson */}
        <img
          className="w-full max-w-[400px]"
          src="/images/harley_logo.png"
          alt="Logo Harley Davidson"
        />
      </div>
    </section>
  );
}
