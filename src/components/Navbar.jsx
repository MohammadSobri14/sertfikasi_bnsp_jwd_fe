"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [
      "tentangkami",
      "visimisi",
      "profile",
      "produk",
      "galeri",
      "daftarklien",
      "kontakkami",
      "artikel",
      "event",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let found = false;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            found = true;
            break;
          }
        }
      }

      // Jika tidak berada di salah satu section (misal: di hero), kosongkan activeSection
      if (!found) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "tentangkami", label: "Tentang Kami" },
    { id: "visimisi", label: "Visi Misi" },
    { id: "profile", label: "Profile" },
    { id: "produk", label: "Produk" },
    { id: "galeri", label: "Galeri" },
    { id: "daftarklien", label: "Daftar Klien" },
    { id: "kontakkami", label: "Kontak Kami" },
    { id: "artikel", label: "Artikel" },
    { id: "event", label: "Event" },
  ];

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200 fixed top-0 z-50">
      <div className="flex items-center justify-between w-full px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-2xl font-bold text-black hover:cursor-pointer"
          onClick={() => setActiveSection("")} // reset saat klik logo
        >
          <img
            src="/images/harley_logo.png"
            alt="Logo Harley Davidson"
            className="w-10 h-10 object-contain"
          />
          <span>
            Harley<span className="text-orange-500">Davidson</span>
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`hover:text-orange-500 transition ${
                activeSection === item.id
                  ? "text-orange-500 underline underline-offset-4"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
