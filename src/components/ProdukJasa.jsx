"use client";

import React, { useState } from "react";
import ModalProduk from "./ModalProduk";

const dataProduk = [
  {
    id: 1,
    title: "Apparel & Aksesori Motor",
    image: "/images/aksesoris.jpg",
    description:
      "Kami menjual berbagai apparel eksklusif komunitas seperti jaket touring, helm, sarung tangan, t-shirt, serta aksesoris riding lainnya yang stylish dan berkualitas tinggi.",
  },
  {
    id: 2,
    title: "Bengkel & Modifikasi",
    image: "/images/garage.jpg",
    description:
      "Kami menyediakan layanan bengkel untuk perawatan dan modifikasi motor, termasuk custom part, pengecatan body, pemasangan lampu LED, serta tuning performa motor.",
  },
  {
    id: 3,
    title: "Pelatihan & Event Touring",
    image: "/images/touring.jpg",
    description:
      "Kami menyelenggarakan pelatihan safety riding, event touring lintas kota, dan gathering komunitas yang membangun solidaritas serta meningkatkan kemampuan berkendara yang aman.",
  },
];

export default function ProdukJasa() {
  const [selectedProduk, setSelectedProduk] = useState(null);

  return (
    <section id="produk" className="w-full bg-[#f3f4f6] py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Judul */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-orange-500">Produk & Jasa</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai produk berkualitas dan layanan profesional
            untuk mendukung kebutuhan pecinta otomotif dan anggota komunitas
            motor.
          </p>
        </div>

        {/* Grid Produk & Jasa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataProduk.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-justify mb-4">
                {item.description.substring(0, 100)}...
              </p>
              <button
                onClick={() => setSelectedProduk(item)}
                className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition hover:cursor-pointer"
              >
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProduk && (
        <ModalProduk produk={selectedProduk} onClose={() => setSelectedProduk(null)} />
      )}
    </section>
  );
}
