"use client";

import React from "react";

const reviews = [
  {
    name: "Andi Pratama",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Bergabung dengan komunitas Harley Davidson memberikan pengalaman luar biasa. Solidaritas dan kebersamaan saat touring tidak bisa digantikan!",
  },
  {
    name: "Sinta Dewi",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    text: "Event gathering yang diselenggarakan komunitas sangat seru! Acaranya terorganisir dengan baik dan memberi ruang untuk menjalin persahabatan baru.",
  },
  {
    name: "Bagus Saputra",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    text: "Motor Harley Davidson yang saya miliki benar-benar tangguh. Performa mesinnya stabil, cocok untuk perjalanan jarak jauh dan touring lintas kota.",
  },
  {
    name: "Maya Lestari",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Pelatihan safety riding yang diberikan komunitas sangat membantu. Saya merasa lebih percaya diri saat mengendarai motor besar seperti Harley.",
  },
  {
    name: "Rizky Hidayat",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    text: "Salah satu alasan saya bergabung adalah semangat brotherhood-nya. Semua anggota saling support, dan itu bikin saya betah di komunitas ini.",
  },
  {
    name: "Putri Amalia",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    text: "Desain motor Harley benar-benar ikonik. Tiap kali riding bareng komunitas, rasanya seperti jadi bagian dari gaya hidup yang penuh kebebasan.",
  },
];

export default function Review() {
  return (
    <section id="daftarklien" className="pb-16 md:pb-24 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="text-center mb-12 py-7">
        <h4 className="text-3xl font-bold text-orange-500">Daftar Klien</h4>
        <p className="mt-2 text-gray-900 text-2xl font-semibold">
          Cerita dari Member Komunitas Harley Davidson
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 flex flex-col space-y-4 hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <h6 className="text-lg font-medium text-gray-800">
                {review.name}
              </h6>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
