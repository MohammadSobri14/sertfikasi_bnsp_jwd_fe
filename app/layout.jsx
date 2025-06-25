import "./globals.css";

export const metadata = {
  title: "Sertifikasi FE",
  description: "Aplikasi Next.js untuk sertifikasi frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gray-100 text-gray-800 font-sans">
        {children}
      </body>
    </html>
  );
}
