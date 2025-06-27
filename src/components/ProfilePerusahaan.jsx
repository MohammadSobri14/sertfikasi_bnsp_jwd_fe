"use client";

import React from "react";
import { Building2, Clock, Star } from "lucide-react";

export default function ProfilePerusahaan() {
  return (
    <section id="profile" className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Judul Utama */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-orange-500">
            Profile Perusahaan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat perjalanan, pengalaman, dan keunggulan
            komunitas motor kami.
          </p>
        </div>

        {/* 3 Kolom: Profil, Pengalaman, Kelebihan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Profil Perusahaan */}
          <div className="bg-[#f9fafb] p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Building2 className="text-orange-500" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800">Profil</h3>
            </div>
            <p className="text-gray-700">
              Kami adalah komunitas motor yang berdiri sejak tahun 2010 dengan
              visi membangun wadah bagi para pecinta otomotif untuk saling
              terhubung, belajar, dan berkembang bersama melalui kegiatan
              positif.
            </p>
          </div>

          {/* Pengalaman */}
          <div className="bg-[#f9fafb] p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="text-orange-500" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800">
                Pengalaman
              </h3>
            </div>
            <p className="text-gray-700">
              Lebih dari 14 tahun kami aktif dalam berbagai event touring
              nasional, pelatihan safety riding, hingga kegiatan sosial.
              Pengalaman ini menjadikan kami komunitas yang solid dan terpercaya
              di dunia otomotif.
            </p>
          </div>

          {/* Kelebihan */}
          <div className="bg-[#f9fafb] p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Star className="text-orange-500" size={32} />
              <h3 className="text-2xl font-semibold text-gray-800">
                Kelebihan
              </h3>
            </div>
            <p className="text-gray-700">
              Kami tidak hanya fokus pada hobi, tetapi juga pada nilai
              kekeluargaan, kedisiplinan, dan profesionalitas. Didukung dengan
              manajemen yang solid dan komunitas yang aktif di seluruh
              Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
