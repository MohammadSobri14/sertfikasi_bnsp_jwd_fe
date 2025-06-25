"use client";

import React, { useEffect, useState } from "react";
import { getAllProduk, deleteProduk } from "../lib/api";
import { Pencil, Trash2, Plus } from "lucide-react";
import TambahProdukModal from "./TambahProdukModal";

export default function ManagementProduk() {
  const [produks, setProduks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduk, setSelectedProduk] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getAllProduk();
      setProduks(data);
    } catch (error) {
      console.error("❌ Gagal mengambil data produk:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedProduk(null); // kosongkan form
    setModalOpen(true);
  };

  const handleEdit = (produk) => {
    setSelectedProduk(produk); // isi form dengan data produk
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin hapus?");
    if (!konfirmasi) return;

    try {
      await deleteProduk(id);
      setProduks((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("❌ Gagal menghapus produk:", error.message);
    }
  };

  if (loading) {
    return (
      <p className="text-center p-6 text-gray-600">Memuat data produk...</p>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Management Produk
      </h1>

      {/* Tombol Tambah Produk */}
      <div className="mb-4 flex justify-start">
        <button
          onClick={handleAdd}
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-green-700 transition"
        >
          <Plus className="mr-2" size={16} />
          Tambah Produk
        </button>
      </div>

      {/* Tabel Produk */}
      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <table className="w-full min-w-[768px] table-auto divide-y divide-gray-200 text-sm text-left text-gray-800">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3 w-32">Thumbnail</th>
              <th className="px-4 py-3 w-40">Kategori</th>
              <th className="px-4 py-3 w-64">Produk</th>
              <th className="px-4 py-3 w-40">Harga</th>
              <th className="px-4 py-3 w-28 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {produks.map((produk) => (
              <tr key={produk.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2">
                  <img
                    src={produk.thumbnail || "/placeholder.png"}
                    alt={produk.produk}
                    className="w-16 h-16 object-cover rounded border"
                  />
                </td>
                <td className="px-4 py-2">{produk.kategori || "-"}</td>
                <td className="px-4 py-2">{produk.produk}</td>
                <td className="px-4 py-2">
                  Rp {Number(produk.harga).toLocaleString("id-ID")}
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="flex justify-center gap-3">
                    {/* Edit */}
                    <button
                      onClick={() => handleEdit(produk)}
                      className="text-blue-600 hover:opacity-80 transition hover:cursor-pointer"
                      title="Edit Produk"
                    >
                      <Pencil size={18} />
                    </button>

                    {/* Hapus */}
                    <button
                      onClick={() => handleDelete(produk.id)}
                      className="text-red-600 hover:opacity-80 transition hover:cursor-pointer"
                      title="Hapus Produk"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Tambah/Edit Produk */}
      <TambahProdukModal
        open={modalOpen}
        setOpen={setModalOpen}
        onSukses={fetchData}
        initialData={selectedProduk}
        mode={selectedProduk ? "edit" : "create"}
      />
    </div>
  );
}
