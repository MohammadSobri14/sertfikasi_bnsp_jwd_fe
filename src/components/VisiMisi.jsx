"use client";

import React from "react";
import { Target, Users } from "lucide-react";

export default function VisiMisi() {
  return (
    <section id="visimisi" className="w-full bg-[#f9fafb] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Judul */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-orange-500">Visi & Misi</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Komitmen kami dalam membangun komunitas motor yang solid,
            inspiratif, dan berdampak positif bagi masyarakat.
          </p>
        </div>

        {/* Grid Visi Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-left">
          {/* Visi */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Target className="text-orange-500" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800">Visi</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Menjadi pelopor komunitas motor terbaik di Indonesia yang mampu
              memberikan nilai tambah bagi anggotanya melalui solidaritas,
              edukasi berkendara yang aman, pengembangan kreativitas di dunia
              otomotif, serta menjunjung tinggi nilai-nilai persaudaraan dan
              kontribusi sosial dalam setiap aktivitas yang dijalankan.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Users className="text-orange-500" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800">Misi</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2 text-justify">
              <li>Meningkatkan kebersamaan dan solidaritas antar anggota.</li>
              <li>Mengadakan event touring, pelatihan, dan kegiatan sosial.</li>
              <li>Mendukung inovasi modifikasi dan apparel bikers lokal.</li>
              <li>Membangun budaya berkendara yang aman dan beretika.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
