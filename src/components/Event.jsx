"use client";

import React from "react";

const events = [
  {
    title: "Touring Nasional Harley Nusantara",
    date: "21 Juni 2025",
    location: "Bandung - Yogyakarta",
    image: "/images/touring.jpg",
    description:
      "Touring tahunan yang diikuti oleh ratusan anggota komunitas Harley dari berbagai daerah untuk mempererat tali persaudaraan.",
  },
  {
    title: "Charity Ride & Bakti Sosial",
    date: "10 Mei 2025",
    location: "Tangerang, Banten",
    image: "/images/sosial.jpg",
    description:
      "Komunitas Harley berbagi kebahagiaan dan bantuan untuk panti asuhan dan masyarakat sekitar dalam kegiatan sosial rutin.",
  },
  {
    title: "Anniversary Harley Nusantara ke-10",
    date: "5 April 2025",
    location: "Jakarta Convention Center",
    image: "/images/anniversary.jpg",
    description:
      "Perayaan satu dekade komunitas Harley Nusantara dengan konser, kontes modifikasi, dan parade motor.",
  },
];

export default function Event() {
  return (
    <section id="event" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-500">Event</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Dokumentasi berbagai kegiatan komunitas dan acara besar yang telah
          kami selenggarakan.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-sm text-gray-500">{event.date}</span>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                {event.title}
              </h3>
              <span className="text-sm text-orange-600 font-medium mt-1">
                {event.location}
              </span>
              <p className="text-gray-600 text-sm mt-3 flex-grow">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
