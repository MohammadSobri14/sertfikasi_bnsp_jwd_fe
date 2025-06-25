"use client";

import { useEffect, useState } from "react";
import { createProduk, updateProduk } from "../lib/api";
import { X } from "lucide-react";

export default function TambahProdukModal({
  open,
  setOpen,
  onSukses,
  initialData = null,
  mode = "create", // "create" atau "edit"
}) {
  const [form, setForm] = useState({
    produk: "",
    kategori: "",
    harga: "",
    thumbnail: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setForm({
        produk: initialData.produk || "",
        kategori: initialData.kategori || "",
        harga: initialData.harga?.toString() || "",
        thumbnail: initialData.thumbnail || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "edit" && initialData?.id) {
        await updateProduk(initialData.id, {
          ...form,
          harga: Number(form.harga),
        });
      } else {
        await createProduk({ ...form, harga: Number(form.harga) });
      }

      setForm({
        produk: "",
        kategori: "",
        harga: "",
        thumbnail: "",
      });
      setOpen(false);
      onSukses(); // Refresh data
    } catch (error) {
      alert("❌ Gagal menyimpan produk");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-brightness-75 bg-black/30">
      <div className="bg-white rounded-xl text-black p-6 w-full max-w-md relative shadow-lg">
        {/* Tombol Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          aria-label="Tutup Modal"
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-blue-600">
          {mode === "edit" ? "Edit Produk" : "Tambah Produk"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="produk"
            value={form.produk}
            onChange={handleChange}
            placeholder="Nama Produk"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            placeholder="Kategori"
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            name="harga"
            value={form.harga}
            onChange={handleChange}
            placeholder="Harga"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            placeholder="URL Thumbnail"
            className="w-full border p-2 rounded"
          />

          <div className="text-right">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading
                ? mode === "edit"
                  ? "Menyimpan..."
                  : "Menambahkan..."
                : mode === "edit"
                ? "Simpan Perubahan"
                : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
