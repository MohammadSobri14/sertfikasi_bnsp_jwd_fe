"use client";

import React from "react";

export default function AboutUs() {
  return (
    <section id="tentangkami" className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Gambar kiri */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/motoclub.png"
            alt="Tentang Klub Motor"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Konten kanan */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-orange-500">Tentang Kami</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Komunitas Motor Harley Davidson</strong> lahir pada tahun{" "}
            <strong>2012</strong> dari semangat persaudaraan dan kecintaan
            terhadap dunia otomotif, khususnya motor besar seperti
            Harley-Davidson.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Bermula dari pertemuan kecil di sebuah bengkel pinggiran kota
            Jakarta, kami kini berkembang menjadi komunitas sekaligus perusahaan
            yang bergerak di bidang{" "}
            <strong>
              event otomotif, apparel bikers, modifikasi motor, hingga kegiatan
              sosial dan touring
            </strong>{" "}
            lintas daerah.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Dengan moto <em>"Brotherhood, Respect, and Ride"</em>, kami percaya
            bahwa berkendara bukan hanya soal kecepatan, tapi juga tentang
            cerita, kebebasan, dan solidaritas di jalanan. Mari jadi bagian dari
            cerita kami!
          </p>
        </div>
      </div>
    </section>
  );
}
