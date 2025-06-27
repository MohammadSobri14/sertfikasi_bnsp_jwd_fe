"use client";

import React from "react";

const articles = [
  {
    title: "Mengenal Lebih Dekat Mesin Harley-Davidson",
    date: "10 Juni 2025",
    summary:
      "Harley-Davidson dikenal dengan suara mesin khasnya. Artikel ini membahas teknologi mesin V-Twin yang menjadi ikon motor legendaris ini.",
    image: "/images/mesin-harley.jpg",
  },
  {
    title: "Tips Perawatan Motor Harley untuk Pemula",
    date: "5 Juni 2025",
    summary:
      "Merawat motor Harley membutuhkan perhatian khusus. Simak panduan perawatan berkala agar performa tetap maksimal.",
    image: "/images/perawatan-harley.jpg",
  },
  {
    title: "Event Touring Harley Nusantara 2025",
    date: "30 Mei 2025",
    summary:
      "Ribuan biker dari seluruh Indonesia berkumpul dalam acara tahunan penuh semangat persaudaraan. Berikut liputannya.",
    image: "/images/event-touring.jpg",
  },
];

export default function Artikel() {
  return (
    <section id="artikel" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-500">Artikel</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Kumpulan artikel menarik seputar dunia Harley-Davidson dan kegiatan
          komunitas kami.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {article.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
