const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// Ambil semua produk
export async function getAllProduk() {
  const res = await fetch(`${API_BASE_URL}/produk`);
  if (!res.ok) throw new Error("Gagal mengambil data produk");
  return res.json();
}

// Tambah produk
export async function createProduk(data) {
  const res = await fetch(`${API_BASE_URL}/produk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Gagal menambahkan produk");
  return res.json();
}

// Ambil produk berdasarkan ID
export async function getProdukById(id) {
  const res = await fetch(`${API_BASE_URL}/produk/${id}`);
  if (!res.ok) throw new Error("Produk tidak ditemukan");
  return res.json();
}

// Update produk
export async function updateProduk(id, data) {
  const res = await fetch(`${API_BASE_URL}/produk/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Gagal update produk");
  return res.json();
}

// Hapus produk
export async function deleteProduk(id) {
  const res = await fetch(`${API_BASE_URL}/produk/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Gagal menghapus produk");
  return res.json();
}
