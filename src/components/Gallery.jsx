"use client";

import React from "react";

const galleryItems = [
  {
    src: "/images/touring.jpg",
    title: "Event Touring Nasional",
    date: "Juni 2024",
  },
  {
    src: "/images/modifikasi.jpg",
    title: "Kontes Modifikasi Motor",
    date: "Mei 2024",
  },
  {
    src: "/images/safety-riding.jpg",
    title: "Pelatihan Safety Riding",
    date: "April 2024",
  },
  {
    src: "/images/sosial.jpg",
    title: "Aksi Sosial & Donasi Komunitas",
    date: "Maret 2024",
  },
  {
    src: "/images/gathering.jpg",
    title: "Gathering Tahunan Anggota",
    date: "Februari 2024",
  },
  {
    src: "/images/apparel.jpg",
    title: "Pameran Produk & Apparel",
    date: "Januari 2024",
  },
  {
    src: "/images/konvoi.jpg",
    title: "Konvoi Merdeka Ride",
    date: "Agustus 2023",
  },
  {
    src: "/images/workshop.jpg",
    title: "Workshop Perawatan Motor",
    date: "Juli 2023",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-3xl font-bold text-orange-500">
            Galeri Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Momen Berkesan
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-6 text-lg">
            Potret perjalanan komunitas kami dalam berbagai aktivitas yang
            membangun solidaritas dan kecintaan terhadap dunia otomotif.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-white/80 mt-1">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
