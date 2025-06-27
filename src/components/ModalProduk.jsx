import React from "react";
import { X } from "lucide-react"; // gunakan ikon jika sudah install lucide-react

export default function ModalProduk({ produk, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl max-w-lg w-full p-6 relative animate-fade-in">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Gambar Produk */}
        <img
          src={produk.image}
          alt={produk.title}
          className="w-full h-52 object-cover rounded-xl mb-4 shadow-md"
        />

        {/* Detail Produk */}
        <h3 className="text-2xl font-bold text-white mb-2">{produk.title}</h3>
        <p className="text-white/90 text-justify tracking-wide leading-relaxed">
          {produk.description}
        </p>
      </div>
    </div>
  );
}
