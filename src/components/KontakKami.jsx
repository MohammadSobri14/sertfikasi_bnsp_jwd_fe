"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Printer, Globe } from "lucide-react";

export default function KontakKami() {
  return (
    <section id="kontakkami" className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-400">Kontak Kami</h2>
        <p className="text-gray-600 mt-3">
          Hubungi kami untuk pertanyaan lebih lanjut, kolaborasi, atau informasi
          kegiatan komunitas.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-10 rounded-xl shadow-md">
        {/* Alamat */}
        <div className="flex items-start gap-4">
          <MapPin className="text-orange-500 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Alamat</h4>
            <p className="text-gray-600">
              Jl. Bikers Brotherhood No.77, Jakarta Selatan, DKI Jakarta 12430
            </p>
          </div>
        </div>

        {/* Telepon */}
        <div className="flex items-start gap-4">
          <Phone className="text-orange-500 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Telepon</h4>
            <p className="text-gray-600">(+62) 851-5618-1586</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <Mail className="text-orange-500 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600">info@harleynusantara.com</p>
          </div>
        </div>

        {/* Fax */}
        <div className="flex items-start gap-4">
          <Printer className="text-orange-500 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Fax</h4>
            <p className="text-gray-600">(+62) 21-555-6789</p>
          </div>
        </div>

        {/* Jam Operasional */}
        <div className="flex items-start gap-4">
          <Clock className="text-orange-500 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Jam Operasional</h4>
            <p className="text-gray-600">
              Senin - Sabtu: 09.00 - 17.00 <br />
              Minggu & Hari Libur: Tutup
            </p>
          </div>
        </div>

        {/* Media Sosial */}
        <div className="flex items-start gap-4">
          <Globe className="text-orange-500 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Media Sosial</h4>
            <p className="text-gray-600">
              Instagram:{" "}
              <a
                href="https://instagram.com/harleynusantara"
                className="text-orange-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @harleynusantara
              </a>
              <br />
              Facebook:{" "}
              <a
                href="https://facebook.com/harleynusantara"
                className="text-orange-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harley Nusantara Community
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
